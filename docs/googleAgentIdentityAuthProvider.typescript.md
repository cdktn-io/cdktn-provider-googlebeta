# `googleAgentIdentityAuthProvider` Submodule <a name="`googleAgentIdentityAuthProvider` Submodule" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAgentIdentityAuthProvider <a name="GoogleAgentIdentityAuthProvider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider google_agent_identity_auth_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

new googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider(scope: Construct, id: string, config: GoogleAgentIdentityAuthProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig">GoogleAgentIdentityAuthProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig">GoogleAgentIdentityAuthProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putAuthProviderTypeParams">putAuthProviderTypeParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetAllowedScopes">resetAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetBlockedScopes">resetBlockedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetWorkloadIds">resetWorkloadIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthProviderTypeParams` <a name="putAuthProviderTypeParams" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putAuthProviderTypeParams"></a>

```typescript
public putAuthProviderTypeParams(value: GoogleAgentIdentityAuthProviderAuthProviderTypeParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putAuthProviderTypeParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams">GoogleAgentIdentityAuthProviderAuthProviderTypeParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleAgentIdentityAuthProviderTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts">GoogleAgentIdentityAuthProviderTimeouts</a>

---

##### `resetAllowedScopes` <a name="resetAllowedScopes" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetAllowedScopes"></a>

```typescript
public resetAllowedScopes(): void
```

##### `resetBlockedScopes` <a name="resetBlockedScopes" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetBlockedScopes"></a>

```typescript
public resetBlockedScopes(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkloadIds` <a name="resetWorkloadIds" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetWorkloadIds"></a>

```typescript
public resetWorkloadIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleAgentIdentityAuthProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isConstruct"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isTerraformElement"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isTerraformResource"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.generateConfigForImport"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleAgentIdentityAuthProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAgentIdentityAuthProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAgentIdentityAuthProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleAgentIdentityAuthProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderTypeParams">authProviderTypeParams</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.deleted">deleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference">GoogleAgentIdentityAuthProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.allowedScopesInput">allowedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderIdInput">authProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderTypeParamsInput">authProviderTypeParamsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams">GoogleAgentIdentityAuthProviderAuthProviderTypeParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.blockedScopesInput">blockedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts">GoogleAgentIdentityAuthProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.workloadIdsInput">workloadIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.allowedScopes">allowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderId">authProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.blockedScopes">blockedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.workloadIds">workloadIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authProviderTypeParams`<sup>Required</sup> <a name="authProviderTypeParams" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderTypeParams"></a>

```typescript
public readonly authProviderTypeParams: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.deleted"></a>

```typescript
public readonly deleted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAgentIdentityAuthProviderTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference">GoogleAgentIdentityAuthProviderTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `allowedScopesInput`<sup>Optional</sup> <a name="allowedScopesInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.allowedScopesInput"></a>

```typescript
public readonly allowedScopesInput: string[];
```

- *Type:* string[]

---

##### `authProviderIdInput`<sup>Optional</sup> <a name="authProviderIdInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderIdInput"></a>

```typescript
public readonly authProviderIdInput: string;
```

- *Type:* string

---

##### `authProviderTypeParamsInput`<sup>Optional</sup> <a name="authProviderTypeParamsInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderTypeParamsInput"></a>

```typescript
public readonly authProviderTypeParamsInput: GoogleAgentIdentityAuthProviderAuthProviderTypeParams;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams">GoogleAgentIdentityAuthProviderAuthProviderTypeParams</a>

---

##### `blockedScopesInput`<sup>Optional</sup> <a name="blockedScopesInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.blockedScopesInput"></a>

```typescript
public readonly blockedScopesInput: string[];
```

- *Type:* string[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleAgentIdentityAuthProviderTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts">GoogleAgentIdentityAuthProviderTimeouts</a>

---

##### `workloadIdsInput`<sup>Optional</sup> <a name="workloadIdsInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.workloadIdsInput"></a>

```typescript
public readonly workloadIdsInput: string[];
```

- *Type:* string[]

---

##### `allowedScopes`<sup>Required</sup> <a name="allowedScopes" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.allowedScopes"></a>

```typescript
public readonly allowedScopes: string[];
```

- *Type:* string[]

---

##### `authProviderId`<sup>Required</sup> <a name="authProviderId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderId"></a>

```typescript
public readonly authProviderId: string;
```

- *Type:* string

---

##### `blockedScopes`<sup>Required</sup> <a name="blockedScopes" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.blockedScopes"></a>

```typescript
public readonly blockedScopes: string[];
```

- *Type:* string[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `workloadIds`<sup>Required</sup> <a name="workloadIds" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.workloadIds"></a>

```typescript
public readonly workloadIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAgentIdentityAuthProviderAuthProviderTypeParams <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParams" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams.Initializer"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

const googleAgentIdentityAuthProviderAuthProviderTypeParams: googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a></code> | api_key block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams.property.threeLeggedOauth">threeLeggedOauth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a></code> | three_legged_oauth block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams.property.twoLeggedOauth">twoLeggedOauth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a></code> | two_legged_oauth block. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams.property.apiKey"></a>

```typescript
public readonly apiKey: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#api_key GoogleAgentIdentityAuthProvider#api_key}

---

##### `threeLeggedOauth`<sup>Optional</sup> <a name="threeLeggedOauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams.property.threeLeggedOauth"></a>

```typescript
public readonly threeLeggedOauth: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

three_legged_oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#three_legged_oauth GoogleAgentIdentityAuthProvider#three_legged_oauth}

---

##### `twoLeggedOauth`<sup>Optional</sup> <a name="twoLeggedOauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams.property.twoLeggedOauth"></a>

```typescript
public readonly twoLeggedOauth: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

two_legged_oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#two_legged_oauth GoogleAgentIdentityAuthProvider#two_legged_oauth}

---

### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey.Initializer"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

const googleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey: googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey.property.apiKey">apiKey</a></code> | <code>string</code> | Input only. The API key for this auth_provider. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Input only. The API key for this auth_provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#api_key GoogleAgentIdentityAuthProvider#api_key}

---

### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider.Initializer"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

const googleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider: googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider = { ... }
```


### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.Initializer"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

const googleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth: googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | The authorization endpoint to send users to for consenting to delegate to the agent. eg. "https://auth.atlassian.com/authorize". |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientId">clientId</a></code> | <code>string</code> | The client ID of the OAuth client. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecret">clientSecret</a></code> | <code>string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWo">clientSecretWo</a></code> | <code>string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWoVersion">clientSecretWoVersion</a></code> | <code>string</code> | Triggers update of 'client_secret_wo' write-only. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.defaultContinueUri">defaultContinueUri</a></code> | <code>string</code> | The default continue URI for 3LO flow and it will be used when no continue URI is provided in the RetrieveCredentials request. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.enablePkce">enablePkce</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables Proof Key for Code Exchange (PKCE) for the OAuth flow to prevent authorization code interception attacks. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | The token endpoint for requesting tokens on behalf of an end user. eg. "https://auth.atlassian.com/oauth/token". |

---

##### `authorizationUrl`<sup>Optional</sup> <a name="authorizationUrl" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

The authorization endpoint to send users to for consenting to delegate to the agent. eg. "https://auth.atlassian.com/authorize".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#authorization_url GoogleAgentIdentityAuthProvider#authorization_url}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_id GoogleAgentIdentityAuthProvider#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret GoogleAgentIdentityAuthProvider#client_secret}

---

##### `clientSecretWo`<sup>Optional</sup> <a name="clientSecretWo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWo"></a>

```typescript
public readonly clientSecretWo: string;
```

- *Type:* string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret_wo GoogleAgentIdentityAuthProvider#client_secret_wo}

---

##### `clientSecretWoVersion`<sup>Optional</sup> <a name="clientSecretWoVersion" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWoVersion"></a>

```typescript
public readonly clientSecretWoVersion: string;
```

- *Type:* string

Triggers update of 'client_secret_wo' write-only.

Increment this value when an update to 'client_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret_wo_version GoogleAgentIdentityAuthProvider#client_secret_wo_version}

---

##### `defaultContinueUri`<sup>Optional</sup> <a name="defaultContinueUri" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.defaultContinueUri"></a>

```typescript
public readonly defaultContinueUri: string;
```

- *Type:* string

The default continue URI for 3LO flow and it will be used when no continue URI is provided in the RetrieveCredentials request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#default_continue_uri GoogleAgentIdentityAuthProvider#default_continue_uri}

---

##### `enablePkce`<sup>Optional</sup> <a name="enablePkce" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.enablePkce"></a>

```typescript
public readonly enablePkce: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables Proof Key for Code Exchange (PKCE) for the OAuth flow to prevent authorization code interception attacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#enable_pkce GoogleAgentIdentityAuthProvider#enable_pkce}

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

The token endpoint for requesting tokens on behalf of an end user. eg. "https://auth.atlassian.com/oauth/token".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#token_url GoogleAgentIdentityAuthProvider#token_url}

---

### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.Initializer"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

const googleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth: googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientId">clientId</a></code> | <code>string</code> | The client ID of the OAuth client. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecret">clientSecret</a></code> | <code>string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWo">clientSecretWo</a></code> | <code>string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWoVersion">clientSecretWoVersion</a></code> | <code>string</code> | Triggers update of 'client_secret_wo' write-only. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | The token endpoint of the OAuth client. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_id GoogleAgentIdentityAuthProvider#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret GoogleAgentIdentityAuthProvider#client_secret}

---

##### `clientSecretWo`<sup>Optional</sup> <a name="clientSecretWo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWo"></a>

```typescript
public readonly clientSecretWo: string;
```

- *Type:* string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret_wo GoogleAgentIdentityAuthProvider#client_secret_wo}

---

##### `clientSecretWoVersion`<sup>Optional</sup> <a name="clientSecretWoVersion" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWoVersion"></a>

```typescript
public readonly clientSecretWoVersion: string;
```

- *Type:* string

Triggers update of 'client_secret_wo' write-only.

Increment this value when an update to 'client_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret_wo_version GoogleAgentIdentityAuthProvider#client_secret_wo_version}

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

The token endpoint of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#token_url GoogleAgentIdentityAuthProvider#token_url}

---

### GoogleAgentIdentityAuthProviderConfig <a name="GoogleAgentIdentityAuthProviderConfig" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.Initializer"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

const googleAgentIdentityAuthProviderConfig: googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.authProviderId">authProviderId</a></code> | <code>string</code> | The ID to use for the AuthProvider, which will become the final segment of the AuthProvider's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.authProviderTypeParams">authProviderTypeParams</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams">GoogleAgentIdentityAuthProviderAuthProviderTypeParams</a></code> | auth_provider_type_params block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.allowedScopes">allowedScopes</a></code> | <code>string[]</code> | List of scopes that are allowed to be requested for this auth_provider. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.blockedScopes">blockedScopes</a></code> | <code>string[]</code> | List of scopes that are blocked from being requested for this auth_provider. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.description">description</a></code> | <code>string</code> | Description of the resource. Must be less than 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#id GoogleAgentIdentityAuthProvider#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#project GoogleAgentIdentityAuthProvider#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts">GoogleAgentIdentityAuthProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.workloadIds">workloadIds</a></code> | <code>string[]</code> | Input only. Represents the workload identity in IAM 'principal://' format of the agent(s) that will use this AuthProvider. Example: 'principal://agents.global.org-${ORG_ID}.system.id.goog/resources/aiplatform/projects/{PROJECT_ID}/locations/{LOCATIONS}/reasoningEngines/{ID}'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authProviderId`<sup>Required</sup> <a name="authProviderId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.authProviderId"></a>

```typescript
public readonly authProviderId: string;
```

- *Type:* string

The ID to use for the AuthProvider, which will become the final segment of the AuthProvider's resource name.

This value should be 1-63 characters, and valid characters
are /a-z-/. The first character must be a lowercase letter, and the
last character must be a lowercase letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#auth_provider_id GoogleAgentIdentityAuthProvider#auth_provider_id}

---

##### `authProviderTypeParams`<sup>Required</sup> <a name="authProviderTypeParams" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.authProviderTypeParams"></a>

```typescript
public readonly authProviderTypeParams: GoogleAgentIdentityAuthProviderAuthProviderTypeParams;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams">GoogleAgentIdentityAuthProviderAuthProviderTypeParams</a>

auth_provider_type_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#auth_provider_type_params GoogleAgentIdentityAuthProvider#auth_provider_type_params}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#location GoogleAgentIdentityAuthProvider#location}

---

##### `allowedScopes`<sup>Optional</sup> <a name="allowedScopes" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.allowedScopes"></a>

```typescript
public readonly allowedScopes: string[];
```

- *Type:* string[]

List of scopes that are allowed to be requested for this auth_provider.

If this list is non-empty, only scopes within this list may be requested.
If this list is empty, all scopes may be requested.
Scopes appearing in 'blocked_scopes' are disallowed even if they appear in
'allowed_scopes'.
The number of allowed scopes is limited to 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#allowed_scopes GoogleAgentIdentityAuthProvider#allowed_scopes}

---

##### `blockedScopes`<sup>Optional</sup> <a name="blockedScopes" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.blockedScopes"></a>

```typescript
public readonly blockedScopes: string[];
```

- *Type:* string[]

List of scopes that are blocked from being requested for this auth_provider.

If a scope appears in this list, it will not be requested,
even if it also appears in 'allowed_scopes'. 'blocked_scopes' takes
precedence over 'allowed_scopes'. The number of blocked scopes is limited
to 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#blocked_scopes GoogleAgentIdentityAuthProvider#blocked_scopes}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#deletion_policy GoogleAgentIdentityAuthProvider#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the resource. Must be less than 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#description GoogleAgentIdentityAuthProvider#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#id GoogleAgentIdentityAuthProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#labels GoogleAgentIdentityAuthProvider#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#project GoogleAgentIdentityAuthProvider#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAgentIdentityAuthProviderTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts">GoogleAgentIdentityAuthProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#timeouts GoogleAgentIdentityAuthProvider#timeouts}

---

##### `workloadIds`<sup>Optional</sup> <a name="workloadIds" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.workloadIds"></a>

```typescript
public readonly workloadIds: string[];
```

- *Type:* string[]

Input only. Represents the workload identity in IAM 'principal://' format of the agent(s) that will use this AuthProvider. Example: 'principal://agents.global.org-${ORG_ID}.system.id.goog/resources/aiplatform/projects/{PROJECT_ID}/locations/{LOCATIONS}/reasoningEngines/{ID}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#workload_ids GoogleAgentIdentityAuthProvider#workload_ids}

---

### GoogleAgentIdentityAuthProviderTimeouts <a name="GoogleAgentIdentityAuthProviderTimeouts" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts.Initializer"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

const googleAgentIdentityAuthProviderTimeouts: googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#create GoogleAgentIdentityAuthProvider#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#delete GoogleAgentIdentityAuthProvider#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#update GoogleAgentIdentityAuthProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#create GoogleAgentIdentityAuthProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#delete GoogleAgentIdentityAuthProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#update GoogleAgentIdentityAuthProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

new googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resetApiKey"></a>

```typescript
public resetApiKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

---


### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

new googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.get"></a>

```typescript
public get(index: number): GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

new googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider</a>

---


### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

new googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putApiKey">putApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth">putThreeLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth">putTwoLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetThreeLeggedOauth">resetThreeLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetTwoLeggedOauth">resetTwoLeggedOauth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putApiKey"></a>

```typescript
public putApiKey(value: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

---

##### `putThreeLeggedOauth` <a name="putThreeLeggedOauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth"></a>

```typescript
public putThreeLeggedOauth(value: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

---

##### `putTwoLeggedOauth` <a name="putTwoLeggedOauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth"></a>

```typescript
public putTwoLeggedOauth(value: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetThreeLeggedOauth` <a name="resetThreeLeggedOauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetThreeLeggedOauth"></a>

```typescript
public resetThreeLeggedOauth(): void
```

##### `resetTwoLeggedOauth` <a name="resetTwoLeggedOauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetTwoLeggedOauth"></a>

```typescript
public resetTwoLeggedOauth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.geAuthProvider">geAuthProvider</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauth">threeLeggedOauth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauth">twoLeggedOauth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauthInput">threeLeggedOauthInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauthInput">twoLeggedOauthInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams">GoogleAgentIdentityAuthProviderAuthProviderTypeParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference</a>

---

##### `geAuthProvider`<sup>Required</sup> <a name="geAuthProvider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.geAuthProvider"></a>

```typescript
public readonly geAuthProvider: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList</a>

---

##### `threeLeggedOauth`<sup>Required</sup> <a name="threeLeggedOauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauth"></a>

```typescript
public readonly threeLeggedOauth: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference</a>

---

##### `twoLeggedOauth`<sup>Required</sup> <a name="twoLeggedOauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauth"></a>

```typescript
public readonly twoLeggedOauth: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

---

##### `threeLeggedOauthInput`<sup>Optional</sup> <a name="threeLeggedOauthInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauthInput"></a>

```typescript
public readonly threeLeggedOauthInput: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

---

##### `twoLeggedOauthInput`<sup>Optional</sup> <a name="twoLeggedOauthInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauthInput"></a>

```typescript
public readonly twoLeggedOauthInput: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAgentIdentityAuthProviderAuthProviderTypeParams;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams">GoogleAgentIdentityAuthProviderAuthProviderTypeParams</a>

---


### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

new googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetAuthorizationUrl">resetAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWo">resetClientSecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWoVersion">resetClientSecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetDefaultContinueUri">resetDefaultContinueUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetEnablePkce">resetEnablePkce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationUrl` <a name="resetAuthorizationUrl" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetAuthorizationUrl"></a>

```typescript
public resetAuthorizationUrl(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretWo` <a name="resetClientSecretWo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWo"></a>

```typescript
public resetClientSecretWo(): void
```

##### `resetClientSecretWoVersion` <a name="resetClientSecretWoVersion" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWoVersion"></a>

```typescript
public resetClientSecretWoVersion(): void
```

##### `resetDefaultContinueUri` <a name="resetDefaultContinueUri" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetDefaultContinueUri"></a>

```typescript
public resetDefaultContinueUri(): void
```

##### `resetEnablePkce` <a name="resetEnablePkce" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetEnablePkce"></a>

```typescript
public resetEnablePkce(): void
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetTokenUrl"></a>

```typescript
public resetTokenUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrlInput">authorizationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoInput">clientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersionInput">clientSecretWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUriInput">defaultContinueUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkceInput">enablePkceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWo">clientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersion">clientSecretWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUri">defaultContinueUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkce">enablePkce</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

---

##### `authorizationUrlInput`<sup>Optional</sup> <a name="authorizationUrlInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrlInput"></a>

```typescript
public readonly authorizationUrlInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretWoInput`<sup>Optional</sup> <a name="clientSecretWoInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoInput"></a>

```typescript
public readonly clientSecretWoInput: string;
```

- *Type:* string

---

##### `clientSecretWoVersionInput`<sup>Optional</sup> <a name="clientSecretWoVersionInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersionInput"></a>

```typescript
public readonly clientSecretWoVersionInput: string;
```

- *Type:* string

---

##### `defaultContinueUriInput`<sup>Optional</sup> <a name="defaultContinueUriInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUriInput"></a>

```typescript
public readonly defaultContinueUriInput: string;
```

- *Type:* string

---

##### `enablePkceInput`<sup>Optional</sup> <a name="enablePkceInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkceInput"></a>

```typescript
public readonly enablePkceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrlInput"></a>

```typescript
public readonly tokenUrlInput: string;
```

- *Type:* string

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretWo`<sup>Required</sup> <a name="clientSecretWo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWo"></a>

```typescript
public readonly clientSecretWo: string;
```

- *Type:* string

---

##### `clientSecretWoVersion`<sup>Required</sup> <a name="clientSecretWoVersion" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersion"></a>

```typescript
public readonly clientSecretWoVersion: string;
```

- *Type:* string

---

##### `defaultContinueUri`<sup>Required</sup> <a name="defaultContinueUri" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUri"></a>

```typescript
public readonly defaultContinueUri: string;
```

- *Type:* string

---

##### `enablePkce`<sup>Required</sup> <a name="enablePkce" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkce"></a>

```typescript
public readonly enablePkce: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

---


### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

new googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWo">resetClientSecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWoVersion">resetClientSecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretWo` <a name="resetClientSecretWo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWo"></a>

```typescript
public resetClientSecretWo(): void
```

##### `resetClientSecretWoVersion` <a name="resetClientSecretWoVersion" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWoVersion"></a>

```typescript
public resetClientSecretWoVersion(): void
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetTokenUrl"></a>

```typescript
public resetTokenUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoInput">clientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersionInput">clientSecretWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWo">clientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersion">clientSecretWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretWoInput`<sup>Optional</sup> <a name="clientSecretWoInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoInput"></a>

```typescript
public readonly clientSecretWoInput: string;
```

- *Type:* string

---

##### `clientSecretWoVersionInput`<sup>Optional</sup> <a name="clientSecretWoVersionInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersionInput"></a>

```typescript
public readonly clientSecretWoVersionInput: string;
```

- *Type:* string

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrlInput"></a>

```typescript
public readonly tokenUrlInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretWo`<sup>Required</sup> <a name="clientSecretWo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWo"></a>

```typescript
public readonly clientSecretWo: string;
```

- *Type:* string

---

##### `clientSecretWoVersion`<sup>Required</sup> <a name="clientSecretWoVersion" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersion"></a>

```typescript
public readonly clientSecretWoVersion: string;
```

- *Type:* string

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

---


### GoogleAgentIdentityAuthProviderTimeoutsOutputReference <a name="GoogleAgentIdentityAuthProviderTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleAgentIdentityAuthProvider } from '@cdktn/provider-google-beta'

new googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts">GoogleAgentIdentityAuthProviderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAgentIdentityAuthProviderTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts">GoogleAgentIdentityAuthProviderTimeouts</a>

---



