# `googleContactCenterInsightsEncryptionSpec` Submodule <a name="`googleContactCenterInsightsEncryptionSpec` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsEncryptionSpec <a name="GoogleContactCenterInsightsEncryptionSpec" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_encryption_spec google_contact_center_insights_encryption_spec}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer"></a>

```typescript
import { googleContactCenterInsightsEncryptionSpec } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec(scope: Construct, id: string, config: GoogleContactCenterInsightsEncryptionSpecConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig">GoogleContactCenterInsightsEncryptionSpecConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig">GoogleContactCenterInsightsEncryptionSpecConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleContactCenterInsightsEncryptionSpecTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsEncryptionSpec resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isConstruct"></a>

```typescript
import { googleContactCenterInsightsEncryptionSpec } from '@cdktn/provider-google-beta'

googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isTerraformElement"></a>

```typescript
import { googleContactCenterInsightsEncryptionSpec } from '@cdktn/provider-google-beta'

googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isTerraformResource"></a>

```typescript
import { googleContactCenterInsightsEncryptionSpec } from '@cdktn/provider-google-beta'

googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.generateConfigForImport"></a>

```typescript
import { googleContactCenterInsightsEncryptionSpec } from '@cdktn/provider-google-beta'

googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleContactCenterInsightsEncryptionSpec resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContactCenterInsightsEncryptionSpec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContactCenterInsightsEncryptionSpec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_encryption_spec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsEncryptionSpec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference">GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference">GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleContactCenterInsightsEncryptionSpecTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsEncryptionSpecConfig <a name="GoogleContactCenterInsightsEncryptionSpecConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.Initializer"></a>

```typescript
import { googleContactCenterInsightsEncryptionSpec } from '@cdktn/provider-google-beta'

const googleContactCenterInsightsEncryptionSpecConfig: googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | The name of customer-managed encryption key that is used to secure a resource and its sub-resources. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.location">location</a></code> | <code>string</code> | The location in which the encryptionSpec is to be initialized. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_encryption_spec#id GoogleContactCenterInsightsEncryptionSpec#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_encryption_spec#project GoogleContactCenterInsightsEncryptionSpec#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The name of customer-managed encryption key that is used to secure a resource and its sub-resources.

If empty, the resource is secured by the default Google encryption key.
Only the key in the same location as this resource is allowed to be used for encryption.
Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{key}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_encryption_spec#kms_key GoogleContactCenterInsightsEncryptionSpec#kms_key}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location in which the encryptionSpec is to be initialized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_encryption_spec#location GoogleContactCenterInsightsEncryptionSpec#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_encryption_spec#id GoogleContactCenterInsightsEncryptionSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_encryption_spec#project GoogleContactCenterInsightsEncryptionSpec#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContactCenterInsightsEncryptionSpecTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_encryption_spec#timeouts GoogleContactCenterInsightsEncryptionSpec#timeouts}

---

### GoogleContactCenterInsightsEncryptionSpecTimeouts <a name="GoogleContactCenterInsightsEncryptionSpecTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts.Initializer"></a>

```typescript
import { googleContactCenterInsightsEncryptionSpec } from '@cdktn/provider-google-beta'

const googleContactCenterInsightsEncryptionSpecTimeouts: googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_encryption_spec#create GoogleContactCenterInsightsEncryptionSpec#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_encryption_spec#delete GoogleContactCenterInsightsEncryptionSpec#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_encryption_spec#create GoogleContactCenterInsightsEncryptionSpec#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_encryption_spec#delete GoogleContactCenterInsightsEncryptionSpec#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference <a name="GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleContactCenterInsightsEncryptionSpec } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContactCenterInsightsEncryptionSpecTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a>

---



