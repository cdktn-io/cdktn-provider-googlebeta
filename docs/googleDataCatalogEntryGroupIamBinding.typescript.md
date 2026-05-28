# `googleDataCatalogEntryGroupIamBinding` Submodule <a name="`googleDataCatalogEntryGroupIamBinding` Submodule" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataCatalogEntryGroupIamBinding <a name="GoogleDataCatalogEntryGroupIamBinding" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding google_data_catalog_entry_group_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer"></a>

```typescript
import { googleDataCatalogEntryGroupIamBinding } from '@cdktn/provider-google-beta'

new googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding(scope: Construct, id: string, config: GoogleDataCatalogEntryGroupIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig">GoogleDataCatalogEntryGroupIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig">GoogleDataCatalogEntryGroupIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.putCondition"></a>

```typescript
public putCondition(value: GoogleDataCatalogEntryGroupIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition">GoogleDataCatalogEntryGroupIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataCatalogEntryGroupIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isConstruct"></a>

```typescript
import { googleDataCatalogEntryGroupIamBinding } from '@cdktn/provider-google-beta'

googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isTerraformElement"></a>

```typescript
import { googleDataCatalogEntryGroupIamBinding } from '@cdktn/provider-google-beta'

googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isTerraformResource"></a>

```typescript
import { googleDataCatalogEntryGroupIamBinding } from '@cdktn/provider-google-beta'

googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.generateConfigForImport"></a>

```typescript
import { googleDataCatalogEntryGroupIamBinding } from '@cdktn/provider-google-beta'

googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDataCatalogEntryGroupIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataCatalogEntryGroupIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataCatalogEntryGroupIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataCatalogEntryGroupIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference">GoogleDataCatalogEntryGroupIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition">GoogleDataCatalogEntryGroupIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.entryGroupInput">entryGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.entryGroup">entryGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.condition"></a>

```typescript
public readonly condition: GoogleDataCatalogEntryGroupIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference">GoogleDataCatalogEntryGroupIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleDataCatalogEntryGroupIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition">GoogleDataCatalogEntryGroupIamBindingCondition</a>

---

##### `entryGroupInput`<sup>Optional</sup> <a name="entryGroupInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.entryGroupInput"></a>

```typescript
public readonly entryGroupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `entryGroup`<sup>Required</sup> <a name="entryGroup" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.entryGroup"></a>

```typescript
public readonly entryGroup: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataCatalogEntryGroupIamBindingCondition <a name="GoogleDataCatalogEntryGroupIamBindingCondition" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition.Initializer"></a>

```typescript
import { googleDataCatalogEntryGroupIamBinding } from '@cdktn/provider-google-beta'

const googleDataCatalogEntryGroupIamBindingCondition: googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#expression GoogleDataCatalogEntryGroupIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#title GoogleDataCatalogEntryGroupIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#description GoogleDataCatalogEntryGroupIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#expression GoogleDataCatalogEntryGroupIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#title GoogleDataCatalogEntryGroupIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#description GoogleDataCatalogEntryGroupIamBinding#description}.

---

### GoogleDataCatalogEntryGroupIamBindingConfig <a name="GoogleDataCatalogEntryGroupIamBindingConfig" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.Initializer"></a>

```typescript
import { googleDataCatalogEntryGroupIamBinding } from '@cdktn/provider-google-beta'

const googleDataCatalogEntryGroupIamBindingConfig: googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.entryGroup">entryGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#entry_group GoogleDataCatalogEntryGroupIamBinding#entry_group}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#members GoogleDataCatalogEntryGroupIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#role GoogleDataCatalogEntryGroupIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition">GoogleDataCatalogEntryGroupIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#id GoogleDataCatalogEntryGroupIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#project GoogleDataCatalogEntryGroupIamBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#region GoogleDataCatalogEntryGroupIamBinding#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `entryGroup`<sup>Required</sup> <a name="entryGroup" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.entryGroup"></a>

```typescript
public readonly entryGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#entry_group GoogleDataCatalogEntryGroupIamBinding#entry_group}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#members GoogleDataCatalogEntryGroupIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#role GoogleDataCatalogEntryGroupIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: GoogleDataCatalogEntryGroupIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition">GoogleDataCatalogEntryGroupIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#condition GoogleDataCatalogEntryGroupIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#id GoogleDataCatalogEntryGroupIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#project GoogleDataCatalogEntryGroupIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_data_catalog_entry_group_iam_binding#region GoogleDataCatalogEntryGroupIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataCatalogEntryGroupIamBindingConditionOutputReference <a name="GoogleDataCatalogEntryGroupIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { googleDataCatalogEntryGroupIamBinding } from '@cdktn/provider-google-beta'

new googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition">GoogleDataCatalogEntryGroupIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataCatalogEntryGroupIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition">GoogleDataCatalogEntryGroupIamBindingCondition</a>

---



