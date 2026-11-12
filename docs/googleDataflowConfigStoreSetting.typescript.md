# `googleDataflowConfigStoreSetting` Submodule <a name="`googleDataflowConfigStoreSetting` Submodule" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataflowConfigStoreSetting <a name="GoogleDataflowConfigStoreSetting" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting google_dataflow_config_store_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer"></a>

```typescript
import { googleDataflowConfigStoreSetting } from '@cdktn/provider-google-beta'

new googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting(scope: Construct, id: string, config: GoogleDataflowConfigStoreSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig">GoogleDataflowConfigStoreSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig">GoogleDataflowConfigStoreSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataflowConfigStoreSettingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a>

---

##### `putValue` <a name="putValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putValue"></a>

```typescript
public putValue(value: GoogleDataflowConfigStoreSettingValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataflowConfigStoreSetting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isConstruct"></a>

```typescript
import { googleDataflowConfigStoreSetting } from '@cdktn/provider-google-beta'

googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformElement"></a>

```typescript
import { googleDataflowConfigStoreSetting } from '@cdktn/provider-google-beta'

googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformResource"></a>

```typescript
import { googleDataflowConfigStoreSetting } from '@cdktn/provider-google-beta'

googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport"></a>

```typescript
import { googleDataflowConfigStoreSetting } from '@cdktn/provider-google-beta'

googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDataflowConfigStoreSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataflowConfigStoreSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataflowConfigStoreSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataflowConfigStoreSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference">GoogleDataflowConfigStoreSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.value">value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference">GoogleDataflowConfigStoreSettingValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.configStoreSettingIdInput">configStoreSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.valueInput">valueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.configStoreSettingId">configStoreSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataflowConfigStoreSettingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference">GoogleDataflowConfigStoreSettingTimeoutsOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.value"></a>

```typescript
public readonly value: GoogleDataflowConfigStoreSettingValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference">GoogleDataflowConfigStoreSettingValueOutputReference</a>

---

##### `configStoreSettingIdInput`<sup>Optional</sup> <a name="configStoreSettingIdInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.configStoreSettingIdInput"></a>

```typescript
public readonly configStoreSettingIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataflowConfigStoreSettingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.valueInput"></a>

```typescript
public readonly valueInput: GoogleDataflowConfigStoreSettingValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a>

---

##### `configStoreSettingId`<sup>Required</sup> <a name="configStoreSettingId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.configStoreSettingId"></a>

```typescript
public readonly configStoreSettingId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataflowConfigStoreSettingConfig <a name="GoogleDataflowConfigStoreSettingConfig" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.Initializer"></a>

```typescript
import { googleDataflowConfigStoreSetting } from '@cdktn/provider-google-beta'

const googleDataflowConfigStoreSettingConfig: googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.configStoreSettingId">configStoreSettingId</a></code> | <code>string</code> | The ID of the config store setting (e.g. 'default_launcher_machine_type'). |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.location">location</a></code> | <code>string</code> | The Dataflow region for the setting (e.g. 'us-central1'). |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.parent">parent</a></code> | <code>string</code> | The parent resource in which to create the config store setting. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.value">value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a></code> | value block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#id GoogleDataflowConfigStoreSetting#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configStoreSettingId`<sup>Required</sup> <a name="configStoreSettingId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.configStoreSettingId"></a>

```typescript
public readonly configStoreSettingId: string;
```

- *Type:* string

The ID of the config store setting (e.g. 'default_launcher_machine_type').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#config_store_setting_id GoogleDataflowConfigStoreSetting#config_store_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The Dataflow region for the setting (e.g. 'us-central1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#location GoogleDataflowConfigStoreSetting#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent resource in which to create the config store setting.

Must be in one of the following formats:
* 'projects/{project_number}' (numeric project number is required)
* 'folders/{folder_id}'
* 'organizations/{organization_id}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#parent GoogleDataflowConfigStoreSetting#parent}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.value"></a>

```typescript
public readonly value: GoogleDataflowConfigStoreSettingValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#value GoogleDataflowConfigStoreSetting#value}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#deletion_policy GoogleDataflowConfigStoreSetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#id GoogleDataflowConfigStoreSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataflowConfigStoreSettingTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#timeouts GoogleDataflowConfigStoreSetting#timeouts}

---

### GoogleDataflowConfigStoreSettingTimeouts <a name="GoogleDataflowConfigStoreSettingTimeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.Initializer"></a>

```typescript
import { googleDataflowConfigStoreSetting } from '@cdktn/provider-google-beta'

const googleDataflowConfigStoreSettingTimeouts: googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#create GoogleDataflowConfigStoreSetting#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#delete GoogleDataflowConfigStoreSetting#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#update GoogleDataflowConfigStoreSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#create GoogleDataflowConfigStoreSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#delete GoogleDataflowConfigStoreSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#update GoogleDataflowConfigStoreSetting#update}.

---

### GoogleDataflowConfigStoreSettingValue <a name="GoogleDataflowConfigStoreSettingValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue.Initializer"></a>

```typescript
import { googleDataflowConfigStoreSetting } from '@cdktn/provider-google-beta'

const googleDataflowConfigStoreSettingValue: googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue.property.boolValue">boolValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue.property.stringValue">stringValue</a></code> | <code>string</code> | Represents a string value. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#bool_value GoogleDataflowConfigStoreSetting#bool_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#string_value GoogleDataflowConfigStoreSetting#string_value}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataflowConfigStoreSettingTimeoutsOutputReference <a name="GoogleDataflowConfigStoreSettingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataflowConfigStoreSetting } from '@cdktn/provider-google-beta'

new googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataflowConfigStoreSettingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a>

---


### GoogleDataflowConfigStoreSettingValueOutputReference <a name="GoogleDataflowConfigStoreSettingValueOutputReference" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.Initializer"></a>

```typescript
import { googleDataflowConfigStoreSetting } from '@cdktn/provider-google-beta'

new googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resetBoolValue"></a>

```typescript
public resetBoolValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.boolValue">boolValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.boolValueInput"></a>

```typescript
public readonly boolValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataflowConfigStoreSettingValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a>

---



