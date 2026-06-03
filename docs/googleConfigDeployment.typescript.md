# `googleConfigDeployment` Submodule <a name="`googleConfigDeployment` Submodule" id="@cdktn/provider-google-beta.googleConfigDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleConfigDeployment <a name="GoogleConfigDeployment" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment google_config_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer"></a>

```typescript
import { googleConfigDeployment } from '@cdktn/provider-google-beta'

new googleConfigDeployment.GoogleConfigDeployment(scope: Construct, id: string, config: GoogleConfigDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig">GoogleConfigDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig">GoogleConfigDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTerraformBlueprint">putTerraformBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetArtifactsGcsBucket">resetArtifactsGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetImportExistingResources">resetImportExistingResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetQuotaValidation">resetQuotaValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTfVersionConstraint">resetTfVersionConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetWorkerPool">resetWorkerPool</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTerraformBlueprint` <a name="putTerraformBlueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTerraformBlueprint"></a>

```typescript
public putTerraformBlueprint(value: GoogleConfigDeploymentTerraformBlueprint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTerraformBlueprint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleConfigDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetArtifactsGcsBucket` <a name="resetArtifactsGcsBucket" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetArtifactsGcsBucket"></a>

```typescript
public resetArtifactsGcsBucket(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImportExistingResources` <a name="resetImportExistingResources" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetImportExistingResources"></a>

```typescript
public resetImportExistingResources(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetQuotaValidation` <a name="resetQuotaValidation" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetQuotaValidation"></a>

```typescript
public resetQuotaValidation(): void
```

##### `resetTfVersionConstraint` <a name="resetTfVersionConstraint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTfVersionConstraint"></a>

```typescript
public resetTfVersionConstraint(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkerPool` <a name="resetWorkerPool" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetWorkerPool"></a>

```typescript
public resetWorkerPool(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleConfigDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isConstruct"></a>

```typescript
import { googleConfigDeployment } from '@cdktn/provider-google-beta'

googleConfigDeployment.GoogleConfigDeployment.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformElement"></a>

```typescript
import { googleConfigDeployment } from '@cdktn/provider-google-beta'

googleConfigDeployment.GoogleConfigDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformResource"></a>

```typescript
import { googleConfigDeployment } from '@cdktn/provider-google-beta'

googleConfigDeployment.GoogleConfigDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport"></a>

```typescript
import { googleConfigDeployment } from '@cdktn/provider-google-beta'

googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleConfigDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleConfigDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleConfigDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleConfigDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.latestRevision">latestRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprint">terraformBlueprint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference">GoogleConfigDeploymentTerraformBlueprintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference">GoogleConfigDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucketInput">artifactsGcsBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResourcesInput">importExistingResourcesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidationInput">quotaValidationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprintInput">terraformBlueprintInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraintInput">tfVersionConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPoolInput">workerPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucket">artifactsGcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResources">importExistingResources</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidation">quotaValidation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraint">tfVersionConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPool">workerPool</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `latestRevision`<sup>Required</sup> <a name="latestRevision" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.latestRevision"></a>

```typescript
public readonly latestRevision: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformBlueprint`<sup>Required</sup> <a name="terraformBlueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprint"></a>

```typescript
public readonly terraformBlueprint: GoogleConfigDeploymentTerraformBlueprintOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference">GoogleConfigDeploymentTerraformBlueprintOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleConfigDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference">GoogleConfigDeploymentTimeoutsOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `artifactsGcsBucketInput`<sup>Optional</sup> <a name="artifactsGcsBucketInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucketInput"></a>

```typescript
public readonly artifactsGcsBucketInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importExistingResourcesInput`<sup>Optional</sup> <a name="importExistingResourcesInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResourcesInput"></a>

```typescript
public readonly importExistingResourcesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `quotaValidationInput`<sup>Optional</sup> <a name="quotaValidationInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidationInput"></a>

```typescript
public readonly quotaValidationInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `terraformBlueprintInput`<sup>Optional</sup> <a name="terraformBlueprintInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprintInput"></a>

```typescript
public readonly terraformBlueprintInput: GoogleConfigDeploymentTerraformBlueprint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

---

##### `tfVersionConstraintInput`<sup>Optional</sup> <a name="tfVersionConstraintInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraintInput"></a>

```typescript
public readonly tfVersionConstraintInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleConfigDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a>

---

##### `workerPoolInput`<sup>Optional</sup> <a name="workerPoolInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPoolInput"></a>

```typescript
public readonly workerPoolInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `artifactsGcsBucket`<sup>Required</sup> <a name="artifactsGcsBucket" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucket"></a>

```typescript
public readonly artifactsGcsBucket: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importExistingResources`<sup>Required</sup> <a name="importExistingResources" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResources"></a>

```typescript
public readonly importExistingResources: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `quotaValidation`<sup>Required</sup> <a name="quotaValidation" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidation"></a>

```typescript
public readonly quotaValidation: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `tfVersionConstraint`<sup>Required</sup> <a name="tfVersionConstraint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraint"></a>

```typescript
public readonly tfVersionConstraint: string;
```

- *Type:* string

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleConfigDeploymentConfig <a name="GoogleConfigDeploymentConfig" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.Initializer"></a>

```typescript
import { googleConfigDeployment } from '@cdktn/provider-google-beta'

const googleConfigDeploymentConfig: googleConfigDeployment.GoogleConfigDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.name">name</a></code> | <code>string</code> | The user-specified ID of the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Required. User-specified Service Account (SA) credentials to be used when actuating resources. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.terraformBlueprint">terraformBlueprint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a></code> | terraform_blueprint block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. Arbitrary key-value metadata storage. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.artifactsGcsBucket">artifactsGcsBucket</a></code> | <code>string</code> | Location for Cloud Build logs and artifacts. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, deletes the deployment and its nested resources. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#id GoogleConfigDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.importExistingResources">importExistingResources</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, attempts to automatically import resources on 409 conflict. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. User-defined metadata for the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#project GoogleConfigDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.quotaValidation">quotaValidation</a></code> | <code>string</code> | Controls quota checks. Possible values: ["ENABLED", "ENFORCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.tfVersionConstraint">tfVersionConstraint</a></code> | <code>string</code> | Optional constraint on the Terraform version. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.workerPool">workerPool</a></code> | <code>string</code> | Custom Cloud Build worker pool resource name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#location GoogleConfigDeployment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The user-specified ID of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#name GoogleConfigDeployment#name}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Required. User-specified Service Account (SA) credentials to be used when actuating resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#service_account GoogleConfigDeployment#service_account}

---

##### `terraformBlueprint`<sup>Required</sup> <a name="terraformBlueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.terraformBlueprint"></a>

```typescript
public readonly terraformBlueprint: GoogleConfigDeploymentTerraformBlueprint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

terraform_blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#terraform_blueprint GoogleConfigDeployment#terraform_blueprint}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Arbitrary key-value metadata storage.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#annotations GoogleConfigDeployment#annotations}

---

##### `artifactsGcsBucket`<sup>Optional</sup> <a name="artifactsGcsBucket" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.artifactsGcsBucket"></a>

```typescript
public readonly artifactsGcsBucket: string;
```

- *Type:* string

Location for Cloud Build logs and artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#artifacts_gcs_bucket GoogleConfigDeployment#artifacts_gcs_bucket}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#deletion_policy GoogleConfigDeployment#deletion_policy}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, deletes the deployment and its nested resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#force_destroy GoogleConfigDeployment#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#id GoogleConfigDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importExistingResources`<sup>Optional</sup> <a name="importExistingResources" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.importExistingResources"></a>

```typescript
public readonly importExistingResources: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, attempts to automatically import resources on 409 conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#import_existing_resources GoogleConfigDeployment#import_existing_resources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. User-defined metadata for the deployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#labels GoogleConfigDeployment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#project GoogleConfigDeployment#project}.

---

##### `quotaValidation`<sup>Optional</sup> <a name="quotaValidation" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.quotaValidation"></a>

```typescript
public readonly quotaValidation: string;
```

- *Type:* string

Controls quota checks. Possible values: ["ENABLED", "ENFORCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#quota_validation GoogleConfigDeployment#quota_validation}

---

##### `tfVersionConstraint`<sup>Optional</sup> <a name="tfVersionConstraint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.tfVersionConstraint"></a>

```typescript
public readonly tfVersionConstraint: string;
```

- *Type:* string

Optional constraint on the Terraform version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#tf_version_constraint GoogleConfigDeployment#tf_version_constraint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleConfigDeploymentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#timeouts GoogleConfigDeployment#timeouts}

---

##### `workerPool`<sup>Optional</sup> <a name="workerPool" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

Custom Cloud Build worker pool resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#worker_pool GoogleConfigDeployment#worker_pool}

---

### GoogleConfigDeploymentTerraformBlueprint <a name="GoogleConfigDeploymentTerraformBlueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.Initializer"></a>

```typescript
import { googleConfigDeployment } from '@cdktn/provider-google-beta'

const googleConfigDeploymentTerraformBlueprint: googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gcsSource">gcsSource</a></code> | <code>string</code> | URI of a GCS object containing the zipped Terraform blueprint. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a></code> | git_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.inputValues">inputValues</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>[]</code> | input_values block. |

---

##### `gcsSource`<sup>Optional</sup> <a name="gcsSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gcsSource"></a>

```typescript
public readonly gcsSource: string;
```

- *Type:* string

URI of a GCS object containing the zipped Terraform blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#gcs_source GoogleConfigDeployment#gcs_source}

---

##### `gitSource`<sup>Optional</sup> <a name="gitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gitSource"></a>

```typescript
public readonly gitSource: GoogleConfigDeploymentTerraformBlueprintGitSource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

git_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#git_source GoogleConfigDeployment#git_source}

---

##### `inputValues`<sup>Optional</sup> <a name="inputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.inputValues"></a>

```typescript
public readonly inputValues: IResolvable | GoogleConfigDeploymentTerraformBlueprintInputValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>[]

input_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#input_values GoogleConfigDeployment#input_values}

---

### GoogleConfigDeploymentTerraformBlueprintGitSource <a name="GoogleConfigDeploymentTerraformBlueprintGitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.Initializer"></a>

```typescript
import { googleConfigDeployment } from '@cdktn/provider-google-beta'

const googleConfigDeploymentTerraformBlueprintGitSource: googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.repo">repo</a></code> | <code>string</code> | Repository URL. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.directory">directory</a></code> | <code>string</code> | Subdirectory within the repo. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.ref">ref</a></code> | <code>string</code> | Git reference (branch or tag). |

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

Repository URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#repo GoogleConfigDeployment#repo}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

Subdirectory within the repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#directory GoogleConfigDeployment#directory}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Git reference (branch or tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#ref GoogleConfigDeployment#ref}

---

### GoogleConfigDeploymentTerraformBlueprintInputValues <a name="GoogleConfigDeploymentTerraformBlueprintInputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.Initializer"></a>

```typescript
import { googleConfigDeployment } from '@cdktn/provider-google-beta'

const googleConfigDeploymentTerraformBlueprintInputValues: googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.inputValue">inputValue</a></code> | <code>string</code> | The value of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.variableName">variableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#variable_name GoogleConfigDeployment#variable_name}. |

---

##### `inputValue`<sup>Required</sup> <a name="inputValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.inputValue"></a>

```typescript
public readonly inputValue: string;
```

- *Type:* string

The value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#input_value GoogleConfigDeployment#input_value}

---

##### `variableName`<sup>Required</sup> <a name="variableName" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.variableName"></a>

```typescript
public readonly variableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#variable_name GoogleConfigDeployment#variable_name}.

---

### GoogleConfigDeploymentTimeouts <a name="GoogleConfigDeploymentTimeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.Initializer"></a>

```typescript
import { googleConfigDeployment } from '@cdktn/provider-google-beta'

const googleConfigDeploymentTimeouts: googleConfigDeployment.GoogleConfigDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#create GoogleConfigDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#delete GoogleConfigDeployment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#update GoogleConfigDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#create GoogleConfigDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#delete GoogleConfigDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_config_deployment#update GoogleConfigDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference <a name="GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer"></a>

```typescript
import { googleConfigDeployment } from '@cdktn/provider-google-beta'

new googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef">resetRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectory` <a name="resetDirectory" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory"></a>

```typescript
public resetDirectory(): void
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef"></a>

```typescript
public resetRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput">directoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput">repoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory">directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo">repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput"></a>

```typescript
public readonly directoryInput: string;
```

- *Type:* string

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput"></a>

```typescript
public readonly repoInput: string;
```

- *Type:* string

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleConfigDeploymentTerraformBlueprintGitSource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

---


### GoogleConfigDeploymentTerraformBlueprintInputValuesList <a name="GoogleConfigDeploymentTerraformBlueprintInputValuesList" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer"></a>

```typescript
import { googleConfigDeployment } from '@cdktn/provider-google-beta'

new googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.get"></a>

```typescript
public get(index: number): GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleConfigDeploymentTerraformBlueprintInputValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>[]

---


### GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference <a name="GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer"></a>

```typescript
import { googleConfigDeployment } from '@cdktn/provider-google-beta'

new googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput">inputValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput">variableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue">inputValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName">variableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputValueInput`<sup>Optional</sup> <a name="inputValueInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput"></a>

```typescript
public readonly inputValueInput: string;
```

- *Type:* string

---

##### `variableNameInput`<sup>Optional</sup> <a name="variableNameInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput"></a>

```typescript
public readonly variableNameInput: string;
```

- *Type:* string

---

##### `inputValue`<sup>Required</sup> <a name="inputValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue"></a>

```typescript
public readonly inputValue: string;
```

- *Type:* string

---

##### `variableName`<sup>Required</sup> <a name="variableName" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName"></a>

```typescript
public readonly variableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleConfigDeploymentTerraformBlueprintInputValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>

---


### GoogleConfigDeploymentTerraformBlueprintOutputReference <a name="GoogleConfigDeploymentTerraformBlueprintOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer"></a>

```typescript
import { googleConfigDeployment } from '@cdktn/provider-google-beta'

new googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putGitSource">putGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putInputValues">putInputValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource">resetGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGitSource">resetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetInputValues">resetInputValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGitSource` <a name="putGitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putGitSource"></a>

```typescript
public putGitSource(value: GoogleConfigDeploymentTerraformBlueprintGitSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

---

##### `putInputValues` <a name="putInputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putInputValues"></a>

```typescript
public putInputValues(value: IResolvable | GoogleConfigDeploymentTerraformBlueprintInputValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putInputValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>[]

---

##### `resetGcsSource` <a name="resetGcsSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource"></a>

```typescript
public resetGcsSource(): void
```

##### `resetGitSource` <a name="resetGitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGitSource"></a>

```typescript
public resetGitSource(): void
```

##### `resetInputValues` <a name="resetInputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetInputValues"></a>

```typescript
public resetInputValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference">GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValues">inputValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList">GoogleConfigDeploymentTerraformBlueprintInputValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput">gcsSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput">gitSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput">inputValuesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource">gcsSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gitSource`<sup>Required</sup> <a name="gitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSource"></a>

```typescript
public readonly gitSource: GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference">GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference</a>

---

##### `inputValues`<sup>Required</sup> <a name="inputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValues"></a>

```typescript
public readonly inputValues: GoogleConfigDeploymentTerraformBlueprintInputValuesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList">GoogleConfigDeploymentTerraformBlueprintInputValuesList</a>

---

##### `gcsSourceInput`<sup>Optional</sup> <a name="gcsSourceInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput"></a>

```typescript
public readonly gcsSourceInput: string;
```

- *Type:* string

---

##### `gitSourceInput`<sup>Optional</sup> <a name="gitSourceInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput"></a>

```typescript
public readonly gitSourceInput: GoogleConfigDeploymentTerraformBlueprintGitSource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

---

##### `inputValuesInput`<sup>Optional</sup> <a name="inputValuesInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput"></a>

```typescript
public readonly inputValuesInput: IResolvable | GoogleConfigDeploymentTerraformBlueprintInputValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>[]

---

##### `gcsSource`<sup>Required</sup> <a name="gcsSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource"></a>

```typescript
public readonly gcsSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleConfigDeploymentTerraformBlueprint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

---


### GoogleConfigDeploymentTimeoutsOutputReference <a name="GoogleConfigDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleConfigDeployment } from '@cdktn/provider-google-beta'

new googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleConfigDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a>

---



