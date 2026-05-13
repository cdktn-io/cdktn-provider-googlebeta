# `googleDataplexDataProductDataAsset` Submodule <a name="`googleDataplexDataProductDataAsset` Submodule" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexDataProductDataAsset <a name="GoogleDataplexDataProductDataAsset" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset google_dataplex_data_product_data_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer"></a>

```typescript
import { googleDataplexDataProductDataAsset } from '@cdktn/provider-google-beta'

new googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset(scope: Construct, id: string, config: GoogleDataplexDataProductDataAssetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig">GoogleDataplexDataProductDataAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig">GoogleDataplexDataProductDataAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putAccessGroupConfigs">putAccessGroupConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetAccessGroupConfigs">resetAccessGroupConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessGroupConfigs` <a name="putAccessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putAccessGroupConfigs"></a>

```typescript
public putAccessGroupConfigs(value: IResolvable | GoogleDataplexDataProductDataAssetAccessGroupConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putAccessGroupConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataplexDataProductDataAssetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

---

##### `resetAccessGroupConfigs` <a name="resetAccessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetAccessGroupConfigs"></a>

```typescript
public resetAccessGroupConfigs(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataplexDataProductDataAsset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isConstruct"></a>

```typescript
import { googleDataplexDataProductDataAsset } from '@cdktn/provider-google-beta'

googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformElement"></a>

```typescript
import { googleDataplexDataProductDataAsset } from '@cdktn/provider-google-beta'

googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformResource"></a>

```typescript
import { googleDataplexDataProductDataAsset } from '@cdktn/provider-google-beta'

googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport"></a>

```typescript
import { googleDataplexDataProductDataAsset } from '@cdktn/provider-google-beta'

googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDataplexDataProductDataAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexDataProductDataAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexDataProductDataAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataplexDataProductDataAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigs">accessGroupConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList">GoogleDataplexDataProductDataAssetAccessGroupConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference">GoogleDataplexDataProductDataAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigsInput">accessGroupConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetIdInput">dataAssetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductIdInput">dataProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetId">dataAssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductId">dataProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resource">resource</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessGroupConfigs`<sup>Required</sup> <a name="accessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigs"></a>

```typescript
public readonly accessGroupConfigs: GoogleDataplexDataProductDataAssetAccessGroupConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList">GoogleDataplexDataProductDataAssetAccessGroupConfigsList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataplexDataProductDataAssetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference">GoogleDataplexDataProductDataAssetTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `accessGroupConfigsInput`<sup>Optional</sup> <a name="accessGroupConfigsInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigsInput"></a>

```typescript
public readonly accessGroupConfigsInput: IResolvable | GoogleDataplexDataProductDataAssetAccessGroupConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>[]

---

##### `dataAssetIdInput`<sup>Optional</sup> <a name="dataAssetIdInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetIdInput"></a>

```typescript
public readonly dataAssetIdInput: string;
```

- *Type:* string

---

##### `dataProductIdInput`<sup>Optional</sup> <a name="dataProductIdInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductIdInput"></a>

```typescript
public readonly dataProductIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataplexDataProductDataAssetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

---

##### `dataAssetId`<sup>Required</sup> <a name="dataAssetId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetId"></a>

```typescript
public readonly dataAssetId: string;
```

- *Type:* string

---

##### `dataProductId`<sup>Required</sup> <a name="dataProductId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductId"></a>

```typescript
public readonly dataProductId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexDataProductDataAssetAccessGroupConfigs <a name="GoogleDataplexDataProductDataAssetAccessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.Initializer"></a>

```typescript
import { googleDataplexDataProductDataAsset } from '@cdktn/provider-google-beta'

const googleDataplexDataProductDataAssetAccessGroupConfigs: googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.accessGroup">accessGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#access_group GoogleDataplexDataProductDataAsset#access_group}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | IAM roles granted on the resource. |

---

##### `accessGroup`<sup>Required</sup> <a name="accessGroup" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.accessGroup"></a>

```typescript
public readonly accessGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#access_group GoogleDataplexDataProductDataAsset#access_group}.

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

IAM roles granted on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#iam_roles GoogleDataplexDataProductDataAsset#iam_roles}

---

### GoogleDataplexDataProductDataAssetConfig <a name="GoogleDataplexDataProductDataAssetConfig" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.Initializer"></a>

```typescript
import { googleDataplexDataProductDataAsset } from '@cdktn/provider-google-beta'

const googleDataplexDataProductDataAssetConfig: googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataAssetId">dataAssetId</a></code> | <code>string</code> | The ID of the data asset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataProductId">dataProductId</a></code> | <code>string</code> | The ID of the parent data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.location">location</a></code> | <code>string</code> | The location for the data asset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.resource">resource</a></code> | <code>string</code> | Full resource name of the cloud resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.accessGroupConfigs">accessGroupConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>[]</code> | access_group_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#id GoogleDataplexDataProductDataAsset#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#project GoogleDataplexDataProductDataAsset#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataAssetId`<sup>Required</sup> <a name="dataAssetId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataAssetId"></a>

```typescript
public readonly dataAssetId: string;
```

- *Type:* string

The ID of the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#data_asset_id GoogleDataplexDataProductDataAsset#data_asset_id}

---

##### `dataProductId`<sup>Required</sup> <a name="dataProductId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataProductId"></a>

```typescript
public readonly dataProductId: string;
```

- *Type:* string

The ID of the parent data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#data_product_id GoogleDataplexDataProductDataAsset#data_product_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#location GoogleDataplexDataProductDataAsset#location}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Full resource name of the cloud resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#resource GoogleDataplexDataProductDataAsset#resource}

---

##### `accessGroupConfigs`<sup>Optional</sup> <a name="accessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.accessGroupConfigs"></a>

```typescript
public readonly accessGroupConfigs: IResolvable | GoogleDataplexDataProductDataAssetAccessGroupConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>[]

access_group_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#access_group_configs GoogleDataplexDataProductDataAsset#access_group_configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#id GoogleDataplexDataProductDataAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#labels GoogleDataplexDataProductDataAsset#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#project GoogleDataplexDataProductDataAsset#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataplexDataProductDataAssetTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#timeouts GoogleDataplexDataProductDataAsset#timeouts}

---

### GoogleDataplexDataProductDataAssetTimeouts <a name="GoogleDataplexDataProductDataAssetTimeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.Initializer"></a>

```typescript
import { googleDataplexDataProductDataAsset } from '@cdktn/provider-google-beta'

const googleDataplexDataProductDataAssetTimeouts: googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#create GoogleDataplexDataProductDataAsset#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#delete GoogleDataplexDataProductDataAsset#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#update GoogleDataplexDataProductDataAsset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#create GoogleDataplexDataProductDataAsset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#delete GoogleDataplexDataProductDataAsset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dataplex_data_product_data_asset#update GoogleDataplexDataProductDataAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexDataProductDataAssetAccessGroupConfigsList <a name="GoogleDataplexDataProductDataAssetAccessGroupConfigsList" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer"></a>

```typescript
import { googleDataplexDataProductDataAsset } from '@cdktn/provider-google-beta'

new googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.get"></a>

```typescript
public get(index: number): GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexDataProductDataAssetAccessGroupConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>[]

---


### GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference <a name="GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer"></a>

```typescript
import { googleDataplexDataProductDataAsset } from '@cdktn/provider-google-beta'

new googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resetIamRoles">resetIamRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resetIamRoles"></a>

```typescript
public resetIamRoles(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroupInput">accessGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRolesInput">iamRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroup">accessGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessGroupInput`<sup>Optional</sup> <a name="accessGroupInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroupInput"></a>

```typescript
public readonly accessGroupInput: string;
```

- *Type:* string

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRolesInput"></a>

```typescript
public readonly iamRolesInput: string[];
```

- *Type:* string[]

---

##### `accessGroup`<sup>Required</sup> <a name="accessGroup" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroup"></a>

```typescript
public readonly accessGroup: string;
```

- *Type:* string

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexDataProductDataAssetAccessGroupConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>

---


### GoogleDataplexDataProductDataAssetTimeoutsOutputReference <a name="GoogleDataplexDataProductDataAssetTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataplexDataProductDataAsset } from '@cdktn/provider-google-beta'

new googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexDataProductDataAssetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

---



