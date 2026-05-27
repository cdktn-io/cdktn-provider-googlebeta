# `googleSpannerInstanceConfig` Submodule <a name="`googleSpannerInstanceConfig` Submodule" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerInstanceConfigA <a name="GoogleSpannerInstanceConfigA" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config google_spanner_instance_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.Initializer"></a>

```typescript
import { googleSpannerInstanceConfig } from '@cdktn/provider-google-beta'

new googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA(scope: Construct, id: string, config: GoogleSpannerInstanceConfigAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig">GoogleSpannerInstanceConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig">GoogleSpannerInstanceConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.putReplicas">putReplicas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetBaseConfig">resetBaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReplicas` <a name="putReplicas" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.putReplicas"></a>

```typescript
public putReplicas(value: IResolvable | GoogleSpannerInstanceConfigReplicas[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.putReplicas.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas">GoogleSpannerInstanceConfigReplicas</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSpannerInstanceConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts">GoogleSpannerInstanceConfigTimeouts</a>

---

##### `resetBaseConfig` <a name="resetBaseConfig" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetBaseConfig"></a>

```typescript
public resetBaseConfig(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSpannerInstanceConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isConstruct"></a>

```typescript
import { googleSpannerInstanceConfig } from '@cdktn/provider-google-beta'

googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isTerraformElement"></a>

```typescript
import { googleSpannerInstanceConfig } from '@cdktn/provider-google-beta'

googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isTerraformResource"></a>

```typescript
import { googleSpannerInstanceConfig } from '@cdktn/provider-google-beta'

googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.generateConfigForImport"></a>

```typescript
import { googleSpannerInstanceConfig } from '@cdktn/provider-google-beta'

googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleSpannerInstanceConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSpannerInstanceConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSpannerInstanceConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSpannerInstanceConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.configType">configType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.replicas">replicas</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList">GoogleSpannerInstanceConfigReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference">GoogleSpannerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.baseConfigInput">baseConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.replicasInput">replicasInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas">GoogleSpannerInstanceConfigReplicas</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts">GoogleSpannerInstanceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.baseConfig">baseConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configType`<sup>Required</sup> <a name="configType" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.replicas"></a>

```typescript
public readonly replicas: GoogleSpannerInstanceConfigReplicasList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList">GoogleSpannerInstanceConfigReplicasList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSpannerInstanceConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference">GoogleSpannerInstanceConfigTimeoutsOutputReference</a>

---

##### `baseConfigInput`<sup>Optional</sup> <a name="baseConfigInput" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.baseConfigInput"></a>

```typescript
public readonly baseConfigInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.replicasInput"></a>

```typescript
public readonly replicasInput: IResolvable | GoogleSpannerInstanceConfigReplicas[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas">GoogleSpannerInstanceConfigReplicas</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSpannerInstanceConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts">GoogleSpannerInstanceConfigTimeouts</a>

---

##### `baseConfig`<sup>Required</sup> <a name="baseConfig" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.baseConfig"></a>

```typescript
public readonly baseConfig: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerInstanceConfigAConfig <a name="GoogleSpannerInstanceConfigAConfig" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.Initializer"></a>

```typescript
import { googleSpannerInstanceConfig } from '@cdktn/provider-google-beta'

const googleSpannerInstanceConfigAConfig: googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.displayName">displayName</a></code> | <code>string</code> | The name of this instance configuration as it appears in UIs. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.replicas">replicas</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas">GoogleSpannerInstanceConfigReplicas</a>[]</code> | replicas block. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.baseConfig">baseConfig</a></code> | <code>string</code> | Base configuration name, e.g. nam3, based on which this configuration is created. Only set for user managed configurations. baseConfig must refer to a configuration of type GOOGLE_MANAGED in the same project as this configuration. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#id GoogleSpannerInstanceConfigA#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.name">name</a></code> | <code>string</code> | A unique identifier for the instance configuration. Values are of the form projects/<project>/instanceConfigs/[a-z][-a-z0-9]*. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#project GoogleSpannerInstanceConfigA#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts">GoogleSpannerInstanceConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name of this instance configuration as it appears in UIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#display_name GoogleSpannerInstanceConfigA#display_name}

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.replicas"></a>

```typescript
public readonly replicas: IResolvable | GoogleSpannerInstanceConfigReplicas[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas">GoogleSpannerInstanceConfigReplicas</a>[]

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#replicas GoogleSpannerInstanceConfigA#replicas}

---

##### `baseConfig`<sup>Optional</sup> <a name="baseConfig" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.baseConfig"></a>

```typescript
public readonly baseConfig: string;
```

- *Type:* string

Base configuration name, e.g. nam3, based on which this configuration is created. Only set for user managed configurations. baseConfig must refer to a configuration of type GOOGLE_MANAGED in the same project as this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#base_config GoogleSpannerInstanceConfigA#base_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#deletion_policy GoogleSpannerInstanceConfigA#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#id GoogleSpannerInstanceConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#labels GoogleSpannerInstanceConfigA#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique identifier for the instance configuration. Values are of the form projects/<project>/instanceConfigs/[a-z][-a-z0-9]*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#name GoogleSpannerInstanceConfigA#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#project GoogleSpannerInstanceConfigA#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSpannerInstanceConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts">GoogleSpannerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#timeouts GoogleSpannerInstanceConfigA#timeouts}

---

### GoogleSpannerInstanceConfigReplicas <a name="GoogleSpannerInstanceConfigReplicas" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas.Initializer"></a>

```typescript
import { googleSpannerInstanceConfig } from '@cdktn/provider-google-beta'

const googleSpannerInstanceConfigReplicas: googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas.property.defaultLeaderLocation">defaultLeaderLocation</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, this location is designated as the default leader location where leader replicas are placed. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas.property.location">location</a></code> | <code>string</code> | The location of the serving resources, e.g. "us-central1". |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas.property.type">type</a></code> | <code>string</code> | Indicates the type of replica.  See the [replica types documentation](https://cloud.google.com/spanner/docs/replication#replica_types) for more details. Possible values: ["READ_WRITE", "READ_ONLY", "WITNESS"]. |

---

##### `defaultLeaderLocation`<sup>Optional</sup> <a name="defaultLeaderLocation" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas.property.defaultLeaderLocation"></a>

```typescript
public readonly defaultLeaderLocation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, this location is designated as the default leader location where leader replicas are placed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#default_leader_location GoogleSpannerInstanceConfigA#default_leader_location}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the serving resources, e.g. "us-central1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#location GoogleSpannerInstanceConfigA#location}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Indicates the type of replica.  See the [replica types documentation](https://cloud.google.com/spanner/docs/replication#replica_types) for more details. Possible values: ["READ_WRITE", "READ_ONLY", "WITNESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#type GoogleSpannerInstanceConfigA#type}

---

### GoogleSpannerInstanceConfigTimeouts <a name="GoogleSpannerInstanceConfigTimeouts" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts.Initializer"></a>

```typescript
import { googleSpannerInstanceConfig } from '@cdktn/provider-google-beta'

const googleSpannerInstanceConfigTimeouts: googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#create GoogleSpannerInstanceConfigA#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#delete GoogleSpannerInstanceConfigA#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#update GoogleSpannerInstanceConfigA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#create GoogleSpannerInstanceConfigA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#delete GoogleSpannerInstanceConfigA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_spanner_instance_config#update GoogleSpannerInstanceConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSpannerInstanceConfigReplicasList <a name="GoogleSpannerInstanceConfigReplicasList" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.Initializer"></a>

```typescript
import { googleSpannerInstanceConfig } from '@cdktn/provider-google-beta'

new googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.get"></a>

```typescript
public get(index: number): GoogleSpannerInstanceConfigReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas">GoogleSpannerInstanceConfigReplicas</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSpannerInstanceConfigReplicas[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas">GoogleSpannerInstanceConfigReplicas</a>[]

---


### GoogleSpannerInstanceConfigReplicasOutputReference <a name="GoogleSpannerInstanceConfigReplicasOutputReference" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer"></a>

```typescript
import { googleSpannerInstanceConfig } from '@cdktn/provider-google-beta'

new googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resetDefaultLeaderLocation">resetDefaultLeaderLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultLeaderLocation` <a name="resetDefaultLeaderLocation" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resetDefaultLeaderLocation"></a>

```typescript
public resetDefaultLeaderLocation(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.defaultLeaderLocationInput">defaultLeaderLocationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.defaultLeaderLocation">defaultLeaderLocation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas">GoogleSpannerInstanceConfigReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultLeaderLocationInput`<sup>Optional</sup> <a name="defaultLeaderLocationInput" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.defaultLeaderLocationInput"></a>

```typescript
public readonly defaultLeaderLocationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `defaultLeaderLocation`<sup>Required</sup> <a name="defaultLeaderLocation" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.defaultLeaderLocation"></a>

```typescript
public readonly defaultLeaderLocation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSpannerInstanceConfigReplicas;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas">GoogleSpannerInstanceConfigReplicas</a>

---


### GoogleSpannerInstanceConfigTimeoutsOutputReference <a name="GoogleSpannerInstanceConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSpannerInstanceConfig } from '@cdktn/provider-google-beta'

new googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts">GoogleSpannerInstanceConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSpannerInstanceConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts">GoogleSpannerInstanceConfigTimeouts</a>

---



