# `googleManagedKafkaAclBinding` Submodule <a name="`googleManagedKafkaAclBinding` Submodule" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleManagedKafkaAclBinding <a name="GoogleManagedKafkaAclBinding" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding google_managed_kafka_acl_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer"></a>

```typescript
import { googleManagedKafkaAclBinding } from '@cdktn/provider-google-beta'

new googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding(scope: Construct, id: string, config: GoogleManagedKafkaAclBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig">GoogleManagedKafkaAclBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig">GoogleManagedKafkaAclBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetPermissionType">resetPermissionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleManagedKafkaAclBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPermissionType` <a name="resetPermissionType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetPermissionType"></a>

```typescript
public resetPermissionType(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleManagedKafkaAclBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isConstruct"></a>

```typescript
import { googleManagedKafkaAclBinding } from '@cdktn/provider-google-beta'

googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformElement"></a>

```typescript
import { googleManagedKafkaAclBinding } from '@cdktn/provider-google-beta'

googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformResource"></a>

```typescript
import { googleManagedKafkaAclBinding } from '@cdktn/provider-google-beta'

googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport"></a>

```typescript
import { googleManagedKafkaAclBinding } from '@cdktn/provider-google-beta'

googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleManagedKafkaAclBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleManagedKafkaAclBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleManagedKafkaAclBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleManagedKafkaAclBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference">GoogleManagedKafkaAclBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.aclIdInput">aclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.permissionTypeInput">permissionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.aclId">aclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.permissionType">permissionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleManagedKafkaAclBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference">GoogleManagedKafkaAclBindingTimeoutsOutputReference</a>

---

##### `aclIdInput`<sup>Optional</sup> <a name="aclIdInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.aclIdInput"></a>

```typescript
public readonly aclIdInput: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `permissionTypeInput`<sup>Optional</sup> <a name="permissionTypeInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.permissionTypeInput"></a>

```typescript
public readonly permissionTypeInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleManagedKafkaAclBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a>

---

##### `aclId`<sup>Required</sup> <a name="aclId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.aclId"></a>

```typescript
public readonly aclId: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.permissionType"></a>

```typescript
public readonly permissionType: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleManagedKafkaAclBindingConfig <a name="GoogleManagedKafkaAclBindingConfig" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.Initializer"></a>

```typescript
import { googleManagedKafkaAclBinding } from '@cdktn/provider-google-beta'

const googleManagedKafkaAclBindingConfig: googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.aclId">aclId</a></code> | <code>string</code> | The ID of the acl this entry belongs to, which is the final component of the acl's name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.cluster">cluster</a></code> | <code>string</code> | The cluster name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.location">location</a></code> | <code>string</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.operation">operation</a></code> | <code>string</code> | The operation type. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.principal">principal</a></code> | <code>string</code> | The principal. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.host">host</a></code> | <code>string</code> | The host. Must be set to "*" for Managed Service for Apache Kafka. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#id GoogleManagedKafkaAclBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.permissionType">permissionType</a></code> | <code>string</code> | The permission type. Accepted values are (case insensitive): ALLOW, DENY. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#project GoogleManagedKafkaAclBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aclId`<sup>Required</sup> <a name="aclId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.aclId"></a>

```typescript
public readonly aclId: string;
```

- *Type:* string

The ID of the acl this entry belongs to, which is the final component of the acl's name.

The structure of 'aclId' defines the Resource
Pattern (resource_type, resource_name, pattern_type) of the acl.
'aclId' is structured like one of the following:
For acls on the cluster: 'cluster'
For acls on a single resource within the cluster: 'topic/{resource_name}' 'consumerGroup/{resource_name}' 'transactionalId/{resource_name}'
For acls on all resources that match a prefix: 'topicPrefixed/{resource_name}' 'consumerGroupPrefixed/{resource_name}' 'transactionalIdPrefixed/{resource_name}'
For acls on all resources of a given type (i.e. the wildcard literal '*''): 'allTopics' (represents 'topic/*') 'allConsumerGroups' (represents 'consumerGroup/*') 'allTransactionalIds' (represents 'transactionalId/*').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#acl_id GoogleManagedKafkaAclBinding#acl_id}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#cluster GoogleManagedKafkaAclBinding#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#location GoogleManagedKafkaAclBinding#location}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

The operation type.

Allowed values are (case insensitive): ALL, READ,
WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS,
ALTER_CONFIGS, and IDEMPOTENT_WRITE. See
https://kafka.apache.org/documentation/#operations_resources_and_protocols
for valid combinations of resource_type and operation for different
Kafka API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#operation GoogleManagedKafkaAclBinding#operation}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

The principal.

Specified as a Google Cloud account, with the Kafka
StandardAuthorizer prefix "User:". For example:
"User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be
the wildcard "User:*" to refer to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#principal GoogleManagedKafkaAclBinding#principal}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#deletion_policy GoogleManagedKafkaAclBinding#deletion_policy}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The host. Must be set to "*" for Managed Service for Apache Kafka.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#host GoogleManagedKafkaAclBinding#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#id GoogleManagedKafkaAclBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissionType`<sup>Optional</sup> <a name="permissionType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.permissionType"></a>

```typescript
public readonly permissionType: string;
```

- *Type:* string

The permission type. Accepted values are (case insensitive): ALLOW, DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#permission_type GoogleManagedKafkaAclBinding#permission_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#project GoogleManagedKafkaAclBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleManagedKafkaAclBindingTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#timeouts GoogleManagedKafkaAclBinding#timeouts}

---

### GoogleManagedKafkaAclBindingTimeouts <a name="GoogleManagedKafkaAclBindingTimeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.Initializer"></a>

```typescript
import { googleManagedKafkaAclBinding } from '@cdktn/provider-google-beta'

const googleManagedKafkaAclBindingTimeouts: googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#create GoogleManagedKafkaAclBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#delete GoogleManagedKafkaAclBinding#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#update GoogleManagedKafkaAclBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#create GoogleManagedKafkaAclBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#delete GoogleManagedKafkaAclBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#update GoogleManagedKafkaAclBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleManagedKafkaAclBindingTimeoutsOutputReference <a name="GoogleManagedKafkaAclBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleManagedKafkaAclBinding } from '@cdktn/provider-google-beta'

new googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleManagedKafkaAclBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a>

---



