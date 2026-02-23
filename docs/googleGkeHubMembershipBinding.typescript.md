# `googleGkeHubMembershipBinding` Submodule <a name="`googleGkeHubMembershipBinding` Submodule" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubMembershipBinding <a name="GoogleGkeHubMembershipBinding" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding google_gke_hub_membership_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer"></a>

```typescript
import { googleGkeHubMembershipBinding } from '@cdktn/provider-google-beta'

new googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding(scope: Construct, id: string, config: GoogleGkeHubMembershipBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig">GoogleGkeHubMembershipBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig">GoogleGkeHubMembershipBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleGkeHubMembershipBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts">GoogleGkeHubMembershipBindingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGkeHubMembershipBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isConstruct"></a>

```typescript
import { googleGkeHubMembershipBinding } from '@cdktn/provider-google-beta'

googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isTerraformElement"></a>

```typescript
import { googleGkeHubMembershipBinding } from '@cdktn/provider-google-beta'

googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isTerraformResource"></a>

```typescript
import { googleGkeHubMembershipBinding } from '@cdktn/provider-google-beta'

googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.generateConfigForImport"></a>

```typescript
import { googleGkeHubMembershipBinding } from '@cdktn/provider-google-beta'

googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleGkeHubMembershipBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGkeHubMembershipBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGkeHubMembershipBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubMembershipBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.state">state</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList">GoogleGkeHubMembershipBindingStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference">GoogleGkeHubMembershipBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipBindingIdInput">membershipBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipIdInput">membershipIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts">GoogleGkeHubMembershipBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipBindingId">membershipBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipId">membershipId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.state"></a>

```typescript
public readonly state: GoogleGkeHubMembershipBindingStateList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList">GoogleGkeHubMembershipBindingStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeHubMembershipBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference">GoogleGkeHubMembershipBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membershipBindingIdInput`<sup>Optional</sup> <a name="membershipBindingIdInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipBindingIdInput"></a>

```typescript
public readonly membershipBindingIdInput: string;
```

- *Type:* string

---

##### `membershipIdInput`<sup>Optional</sup> <a name="membershipIdInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipIdInput"></a>

```typescript
public readonly membershipIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleGkeHubMembershipBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts">GoogleGkeHubMembershipBindingTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `membershipBindingId`<sup>Required</sup> <a name="membershipBindingId" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipBindingId"></a>

```typescript
public readonly membershipBindingId: string;
```

- *Type:* string

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubMembershipBindingConfig <a name="GoogleGkeHubMembershipBindingConfig" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.Initializer"></a>

```typescript
import { googleGkeHubMembershipBinding } from '@cdktn/provider-google-beta'

const googleGkeHubMembershipBindingConfig: googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.location">location</a></code> | <code>string</code> | Location of the membership. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.membershipBindingId">membershipBindingId</a></code> | <code>string</code> | The client-provided identifier of the membership binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.membershipId">membershipId</a></code> | <code>string</code> | Id of the membership. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.scope">scope</a></code> | <code>string</code> | A Workspace resource name in the format 'projects/* /locations/* /scopes/*'. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#id GoogleGkeHubMembershipBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels for this Membership binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#project GoogleGkeHubMembershipBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts">GoogleGkeHubMembershipBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#location GoogleGkeHubMembershipBinding#location}

---

##### `membershipBindingId`<sup>Required</sup> <a name="membershipBindingId" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.membershipBindingId"></a>

```typescript
public readonly membershipBindingId: string;
```

- *Type:* string

The client-provided identifier of the membership binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#membership_binding_id GoogleGkeHubMembershipBinding#membership_binding_id}

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

Id of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#membership_id GoogleGkeHubMembershipBinding#membership_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

A Workspace resource name in the format 'projects/* /locations/* /scopes/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#scope GoogleGkeHubMembershipBinding#scope}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#id GoogleGkeHubMembershipBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels for this Membership binding.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#labels GoogleGkeHubMembershipBinding#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#project GoogleGkeHubMembershipBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeHubMembershipBindingTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts">GoogleGkeHubMembershipBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#timeouts GoogleGkeHubMembershipBinding#timeouts}

---

### GoogleGkeHubMembershipBindingState <a name="GoogleGkeHubMembershipBindingState" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingState.Initializer"></a>

```typescript
import { googleGkeHubMembershipBinding } from '@cdktn/provider-google-beta'

const googleGkeHubMembershipBindingState: googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingState = { ... }
```


### GoogleGkeHubMembershipBindingTimeouts <a name="GoogleGkeHubMembershipBindingTimeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts.Initializer"></a>

```typescript
import { googleGkeHubMembershipBinding } from '@cdktn/provider-google-beta'

const googleGkeHubMembershipBindingTimeouts: googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#create GoogleGkeHubMembershipBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#delete GoogleGkeHubMembershipBinding#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#update GoogleGkeHubMembershipBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#create GoogleGkeHubMembershipBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#delete GoogleGkeHubMembershipBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_gke_hub_membership_binding#update GoogleGkeHubMembershipBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubMembershipBindingStateList <a name="GoogleGkeHubMembershipBindingStateList" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.Initializer"></a>

```typescript
import { googleGkeHubMembershipBinding } from '@cdktn/provider-google-beta'

new googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.get"></a>

```typescript
public get(index: number): GoogleGkeHubMembershipBindingStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeHubMembershipBindingStateOutputReference <a name="GoogleGkeHubMembershipBindingStateOutputReference" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer"></a>

```typescript
import { googleGkeHubMembershipBinding } from '@cdktn/provider-google-beta'

new googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingState">GoogleGkeHubMembershipBindingState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeHubMembershipBindingState;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingState">GoogleGkeHubMembershipBindingState</a>

---


### GoogleGkeHubMembershipBindingTimeoutsOutputReference <a name="GoogleGkeHubMembershipBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleGkeHubMembershipBinding } from '@cdktn/provider-google-beta'

new googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts">GoogleGkeHubMembershipBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeHubMembershipBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts">GoogleGkeHubMembershipBindingTimeouts</a>

---



