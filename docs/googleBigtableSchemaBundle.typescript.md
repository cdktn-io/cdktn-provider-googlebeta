# `googleBigtableSchemaBundle` Submodule <a name="`googleBigtableSchemaBundle` Submodule" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigtableSchemaBundle <a name="GoogleBigtableSchemaBundle" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle google_bigtable_schema_bundle}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer"></a>

```typescript
import { googleBigtableSchemaBundle } from '@cdktn/provider-google-beta'

new googleBigtableSchemaBundle.GoogleBigtableSchemaBundle(scope: Construct, id: string, config: GoogleBigtableSchemaBundleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig">GoogleBigtableSchemaBundleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig">GoogleBigtableSchemaBundleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.putProtoSchema">putProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetIgnoreWarnings">resetIgnoreWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetInstance">resetInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProtoSchema` <a name="putProtoSchema" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.putProtoSchema"></a>

```typescript
public putProtoSchema(value: GoogleBigtableSchemaBundleProtoSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.putProtoSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema">GoogleBigtableSchemaBundleProtoSchema</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBigtableSchemaBundleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts">GoogleBigtableSchemaBundleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreWarnings` <a name="resetIgnoreWarnings" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetIgnoreWarnings"></a>

```typescript
public resetIgnoreWarnings(): void
```

##### `resetInstance` <a name="resetInstance" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetInstance"></a>

```typescript
public resetInstance(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTable` <a name="resetTable" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetTable"></a>

```typescript
public resetTable(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBigtableSchemaBundle resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isConstruct"></a>

```typescript
import { googleBigtableSchemaBundle } from '@cdktn/provider-google-beta'

googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isTerraformElement"></a>

```typescript
import { googleBigtableSchemaBundle } from '@cdktn/provider-google-beta'

googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isTerraformResource"></a>

```typescript
import { googleBigtableSchemaBundle } from '@cdktn/provider-google-beta'

googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.generateConfigForImport"></a>

```typescript
import { googleBigtableSchemaBundle } from '@cdktn/provider-google-beta'

googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleBigtableSchemaBundle resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigtableSchemaBundle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigtableSchemaBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigtableSchemaBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.protoSchema">protoSchema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference">GoogleBigtableSchemaBundleProtoSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference">GoogleBigtableSchemaBundleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.ignoreWarningsInput">ignoreWarningsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.protoSchemaInput">protoSchemaInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema">GoogleBigtableSchemaBundleProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.schemaBundleIdInput">schemaBundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.tableInput">tableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts">GoogleBigtableSchemaBundleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.ignoreWarnings">ignoreWarnings</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.schemaBundleId">schemaBundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.table">table</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protoSchema`<sup>Required</sup> <a name="protoSchema" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.protoSchema"></a>

```typescript
public readonly protoSchema: GoogleBigtableSchemaBundleProtoSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference">GoogleBigtableSchemaBundleProtoSchemaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigtableSchemaBundleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference">GoogleBigtableSchemaBundleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreWarningsInput`<sup>Optional</sup> <a name="ignoreWarningsInput" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.ignoreWarningsInput"></a>

```typescript
public readonly ignoreWarningsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `protoSchemaInput`<sup>Optional</sup> <a name="protoSchemaInput" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.protoSchemaInput"></a>

```typescript
public readonly protoSchemaInput: GoogleBigtableSchemaBundleProtoSchema;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema">GoogleBigtableSchemaBundleProtoSchema</a>

---

##### `schemaBundleIdInput`<sup>Optional</sup> <a name="schemaBundleIdInput" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.schemaBundleIdInput"></a>

```typescript
public readonly schemaBundleIdInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.tableInput"></a>

```typescript
public readonly tableInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBigtableSchemaBundleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts">GoogleBigtableSchemaBundleTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreWarnings`<sup>Required</sup> <a name="ignoreWarnings" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.ignoreWarnings"></a>

```typescript
public readonly ignoreWarnings: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `schemaBundleId`<sup>Required</sup> <a name="schemaBundleId" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.schemaBundleId"></a>

```typescript
public readonly schemaBundleId: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigtableSchemaBundleConfig <a name="GoogleBigtableSchemaBundleConfig" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.Initializer"></a>

```typescript
import { googleBigtableSchemaBundle } from '@cdktn/provider-google-beta'

const googleBigtableSchemaBundleConfig: googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.protoSchema">protoSchema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema">GoogleBigtableSchemaBundleProtoSchema</a></code> | proto_schema block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.schemaBundleId">schemaBundleId</a></code> | <code>string</code> | The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#id GoogleBigtableSchemaBundle#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.ignoreWarnings">ignoreWarnings</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, allow backwards incompatible changes. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.instance">instance</a></code> | <code>string</code> | The name of the instance to create the schema bundle within. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#project GoogleBigtableSchemaBundle#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.table">table</a></code> | <code>string</code> | The name of the table to create the schema bundle within. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts">GoogleBigtableSchemaBundleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `protoSchema`<sup>Required</sup> <a name="protoSchema" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.protoSchema"></a>

```typescript
public readonly protoSchema: GoogleBigtableSchemaBundleProtoSchema;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema">GoogleBigtableSchemaBundleProtoSchema</a>

proto_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#proto_schema GoogleBigtableSchemaBundle#proto_schema}

---

##### `schemaBundleId`<sup>Required</sup> <a name="schemaBundleId" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.schemaBundleId"></a>

```typescript
public readonly schemaBundleId: string;
```

- *Type:* string

The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#schema_bundle_id GoogleBigtableSchemaBundle#schema_bundle_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#id GoogleBigtableSchemaBundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreWarnings`<sup>Optional</sup> <a name="ignoreWarnings" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.ignoreWarnings"></a>

```typescript
public readonly ignoreWarnings: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, allow backwards incompatible changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#ignore_warnings GoogleBigtableSchemaBundle#ignore_warnings}

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The name of the instance to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#instance GoogleBigtableSchemaBundle#instance}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#project GoogleBigtableSchemaBundle#project}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

The name of the table to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#table GoogleBigtableSchemaBundle#table}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigtableSchemaBundleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts">GoogleBigtableSchemaBundleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#timeouts GoogleBigtableSchemaBundle#timeouts}

---

### GoogleBigtableSchemaBundleProtoSchema <a name="GoogleBigtableSchemaBundleProtoSchema" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema.Initializer"></a>

```typescript
import { googleBigtableSchemaBundle } from '@cdktn/provider-google-beta'

const googleBigtableSchemaBundleProtoSchema: googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema.property.protoDescriptors">protoDescriptors</a></code> | <code>string</code> | Base64 encoded content of the file. |

---

##### `protoDescriptors`<sup>Required</sup> <a name="protoDescriptors" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema.property.protoDescriptors"></a>

```typescript
public readonly protoDescriptors: string;
```

- *Type:* string

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#proto_descriptors GoogleBigtableSchemaBundle#proto_descriptors}

---

### GoogleBigtableSchemaBundleTimeouts <a name="GoogleBigtableSchemaBundleTimeouts" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts.Initializer"></a>

```typescript
import { googleBigtableSchemaBundle } from '@cdktn/provider-google-beta'

const googleBigtableSchemaBundleTimeouts: googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#create GoogleBigtableSchemaBundle#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#delete GoogleBigtableSchemaBundle#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#update GoogleBigtableSchemaBundle#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#create GoogleBigtableSchemaBundle#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#delete GoogleBigtableSchemaBundle#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_bigtable_schema_bundle#update GoogleBigtableSchemaBundle#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigtableSchemaBundleProtoSchemaOutputReference <a name="GoogleBigtableSchemaBundleProtoSchemaOutputReference" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.Initializer"></a>

```typescript
import { googleBigtableSchemaBundle } from '@cdktn/provider-google-beta'

new googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptorsInput">protoDescriptorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptors">protoDescriptors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema">GoogleBigtableSchemaBundleProtoSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `protoDescriptorsInput`<sup>Optional</sup> <a name="protoDescriptorsInput" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptorsInput"></a>

```typescript
public readonly protoDescriptorsInput: string;
```

- *Type:* string

---

##### `protoDescriptors`<sup>Required</sup> <a name="protoDescriptors" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptors"></a>

```typescript
public readonly protoDescriptors: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigtableSchemaBundleProtoSchema;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema">GoogleBigtableSchemaBundleProtoSchema</a>

---


### GoogleBigtableSchemaBundleTimeoutsOutputReference <a name="GoogleBigtableSchemaBundleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBigtableSchemaBundle } from '@cdktn/provider-google-beta'

new googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts">GoogleBigtableSchemaBundleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigtableSchemaBundleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts">GoogleBigtableSchemaBundleTimeouts</a>

---



