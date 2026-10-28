# `googleStorageControlProjectFeatureConfig` Submodule <a name="`googleStorageControlProjectFeatureConfig` Submodule" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageControlProjectFeatureConfig <a name="GoogleStorageControlProjectFeatureConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config google_storage_control_project_feature_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

new googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig(scope: Construct, id: string, config: GoogleStorageControlProjectFeatureConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig">GoogleStorageControlProjectFeatureConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig">GoogleStorageControlProjectFeatureConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putAutoAnnotateConfig">putAutoAnnotateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoAnnotateConfig` <a name="putAutoAnnotateConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putAutoAnnotateConfig"></a>

```typescript
public putAutoAnnotateConfig(value: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putAutoAnnotateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putFilter"></a>

```typescript
public putFilter(value: GoogleStorageControlProjectFeatureConfigFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleStorageControlProjectFeatureConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleStorageControlProjectFeatureConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isConstruct"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformElement"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformResource"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleStorageControlProjectFeatureConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageControlProjectFeatureConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageControlProjectFeatureConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleStorageControlProjectFeatureConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfig">autoAnnotateConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference">GoogleStorageControlProjectFeatureConfigFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference">GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfigInput">autoAnnotateConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigIdInput">featureConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filterInput">filterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigId">featureConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoAnnotateConfig`<sup>Required</sup> <a name="autoAnnotateConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfig"></a>

```typescript
public readonly autoAnnotateConfig: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filter"></a>

```typescript
public readonly filter: GoogleStorageControlProjectFeatureConfigFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference">GoogleStorageControlProjectFeatureConfigFilterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference">GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `autoAnnotateConfigInput`<sup>Optional</sup> <a name="autoAnnotateConfigInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfigInput"></a>

```typescript
public readonly autoAnnotateConfigInput: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `featureConfigIdInput`<sup>Optional</sup> <a name="featureConfigIdInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigIdInput"></a>

```typescript
public readonly featureConfigIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filterInput"></a>

```typescript
public readonly filterInput: GoogleStorageControlProjectFeatureConfigFilter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleStorageControlProjectFeatureConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `featureConfigId`<sup>Required</sup> <a name="featureConfigId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigId"></a>

```typescript
public readonly featureConfigId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.Initializer"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

const googleStorageControlProjectFeatureConfigAutoAnnotateConfig: googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.models">models</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>[]</code> | models block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.processingLocation">processingLocation</a></code> | <code>string</code> | The geographic location (case-sensitive) where data is processed. Currently, only multi-region locations such as 'us', 'eu', or 'asia' are supported. |

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.models"></a>

```typescript
public readonly models: IResolvable | GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>[]

models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#models GoogleStorageControlProjectFeatureConfig#models}

---

##### `processingLocation`<sup>Required</sup> <a name="processingLocation" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.processingLocation"></a>

```typescript
public readonly processingLocation: string;
```

- *Type:* string

The geographic location (case-sensitive) where data is processed. Currently, only multi-region locations such as 'us', 'eu', or 'asia' are supported.

To avoid duplicate billing, configure exactly one processing location for each bucket
and model combination. If you configure multiple processing locations for the same
bucket and model across different feature configurations, a separate annotation run is
triggered in each location, and you're billed for each resulting annotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#processing_location GoogleStorageControlProjectFeatureConfig#processing_location}

---

### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels.Initializer"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

const googleStorageControlProjectFeatureConfigAutoAnnotateConfigModels: googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels.property.name">name</a></code> | <code>string</code> | The name of the model. Supported values include 'face-detector', 'object-detector', 'label-detector', and 'content-safety'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the model. Supported values include 'face-detector', 'object-detector', 'label-detector', and 'content-safety'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#name GoogleStorageControlProjectFeatureConfig#name}

---

### GoogleStorageControlProjectFeatureConfigConfig <a name="GoogleStorageControlProjectFeatureConfigConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.Initializer"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

const googleStorageControlProjectFeatureConfigConfig: googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.autoAnnotateConfig">autoAnnotateConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a></code> | auto_annotate_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.featureConfigId">featureConfigId</a></code> | <code>string</code> | The ID of the feature configuration, which becomes the final component of its resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.description">description</a></code> | <code>string</code> | A description of the feature configuration. The description can be up to 256 characters long. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#id GoogleStorageControlProjectFeatureConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#project GoogleStorageControlProjectFeatureConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoAnnotateConfig`<sup>Required</sup> <a name="autoAnnotateConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.autoAnnotateConfig"></a>

```typescript
public readonly autoAnnotateConfig: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

auto_annotate_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#auto_annotate_config GoogleStorageControlProjectFeatureConfig#auto_annotate_config}

---

##### `featureConfigId`<sup>Required</sup> <a name="featureConfigId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.featureConfigId"></a>

```typescript
public readonly featureConfigId: string;
```

- *Type:* string

The ID of the feature configuration, which becomes the final component of its resource name.

The ID must be 1 to 63 characters long, start with a lowercase letter, and contain only
lowercase letters, digits, and dashes. The last character can't be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#feature_config_id GoogleStorageControlProjectFeatureConfig#feature_config_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#deletion_policy GoogleStorageControlProjectFeatureConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the feature configuration. The description can be up to 256 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#description GoogleStorageControlProjectFeatureConfig#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.filter"></a>

```typescript
public readonly filter: GoogleStorageControlProjectFeatureConfigFilter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#filter GoogleStorageControlProjectFeatureConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#id GoogleStorageControlProjectFeatureConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#project GoogleStorageControlProjectFeatureConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleStorageControlProjectFeatureConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#timeouts GoogleStorageControlProjectFeatureConfig#timeouts}

---

### GoogleStorageControlProjectFeatureConfigFilter <a name="GoogleStorageControlProjectFeatureConfigFilter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter.Initializer"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

const googleStorageControlProjectFeatureConfigFilter: googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter.property.includedCloudStorageBuckets">includedCloudStorageBuckets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a></code> | included_cloud_storage_buckets block. |

---

##### `includedCloudStorageBuckets`<sup>Required</sup> <a name="includedCloudStorageBuckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter.property.includedCloudStorageBuckets"></a>

```typescript
public readonly includedCloudStorageBuckets: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#included_cloud_storage_buckets GoogleStorageControlProjectFeatureConfig#included_cloud_storage_buckets}

---

### GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets <a name="GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

const googleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets: googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>string[]</code> | The names of the buckets to include. |

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```typescript
public readonly bucketIdRegexes: string[];
```

- *Type:* string[]

The names of the buckets to include.

For Auto Annotate, regex wildcards aren't
supported, so specify exact bucket names (for example, 'my-bucket'). Each bucket
must already exist in the feature configuration's project. Up to 1,000 buckets can
be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#bucket_id_regexes GoogleStorageControlProjectFeatureConfig#bucket_id_regexes}

---

### GoogleStorageControlProjectFeatureConfigTimeouts <a name="GoogleStorageControlProjectFeatureConfigTimeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.Initializer"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

const googleStorageControlProjectFeatureConfigTimeouts: googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#create GoogleStorageControlProjectFeatureConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#delete GoogleStorageControlProjectFeatureConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#update GoogleStorageControlProjectFeatureConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#create GoogleStorageControlProjectFeatureConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#delete GoogleStorageControlProjectFeatureConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#update GoogleStorageControlProjectFeatureConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

new googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.get"></a>

```typescript
public get(index: number): GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>[]

---


### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

new googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>

---


### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

new googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.putModels">putModels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModels` <a name="putModels" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.putModels"></a>

```typescript
public putModels(value: IResolvable | GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.putModels.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.models">models</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.modelsInput">modelsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocationInput">processingLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocation">processingLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.models"></a>

```typescript
public readonly models: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList</a>

---

##### `modelsInput`<sup>Optional</sup> <a name="modelsInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.modelsInput"></a>

```typescript
public readonly modelsInput: IResolvable | GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>[]

---

##### `processingLocationInput`<sup>Optional</sup> <a name="processingLocationInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocationInput"></a>

```typescript
public readonly processingLocationInput: string;
```

- *Type:* string

---

##### `processingLocation`<sup>Required</sup> <a name="processingLocation" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocation"></a>

```typescript
public readonly processingLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

---


### GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

new googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">bucketIdRegexesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketIdRegexesInput`<sup>Optional</sup> <a name="bucketIdRegexesInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```typescript
public readonly bucketIdRegexesInput: string[];
```

- *Type:* string[]

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```typescript
public readonly bucketIdRegexes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

---


### GoogleStorageControlProjectFeatureConfigFilterOutputReference <a name="GoogleStorageControlProjectFeatureConfigFilterOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

new googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.putIncludedCloudStorageBuckets">putIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncludedCloudStorageBuckets` <a name="putIncludedCloudStorageBuckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.putIncludedCloudStorageBuckets"></a>

```typescript
public putIncludedCloudStorageBuckets(value: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.putIncludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBuckets">includedCloudStorageBuckets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBucketsInput">includedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includedCloudStorageBuckets`<sup>Required</sup> <a name="includedCloudStorageBuckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```typescript
public readonly includedCloudStorageBuckets: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference</a>

---

##### `includedCloudStorageBucketsInput`<sup>Optional</sup> <a name="includedCloudStorageBucketsInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBucketsInput"></a>

```typescript
public readonly includedCloudStorageBucketsInput: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageControlProjectFeatureConfigFilter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

---


### GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference <a name="GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleStorageControlProjectFeatureConfig } from '@cdktn/provider-google-beta'

new googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageControlProjectFeatureConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a>

---



