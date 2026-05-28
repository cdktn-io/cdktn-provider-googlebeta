# `googleNetworkSecurityMirroringEndpoint` Submodule <a name="`googleNetworkSecurityMirroringEndpoint` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityMirroringEndpoint <a name="GoogleNetworkSecurityMirroringEndpoint" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint google_network_security_mirroring_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.Initializer"></a>

```typescript
import { googleNetworkSecurityMirroringEndpoint } from '@cdktn/provider-google-beta'

new googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint(scope: Construct, id: string, config: GoogleNetworkSecurityMirroringEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig">GoogleNetworkSecurityMirroringEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig">GoogleNetworkSecurityMirroringEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkSecurityMirroringEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts">GoogleNetworkSecurityMirroringEndpointTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityMirroringEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isConstruct"></a>

```typescript
import { googleNetworkSecurityMirroringEndpoint } from '@cdktn/provider-google-beta'

googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isTerraformElement"></a>

```typescript
import { googleNetworkSecurityMirroringEndpoint } from '@cdktn/provider-google-beta'

googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isTerraformResource"></a>

```typescript
import { googleNetworkSecurityMirroringEndpoint } from '@cdktn/provider-google-beta'

googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.generateConfigForImport"></a>

```typescript
import { googleNetworkSecurityMirroringEndpoint } from '@cdktn/provider-google-beta'

googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkSecurityMirroringEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityMirroringEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityMirroringEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityMirroringEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference">GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointGroupInput">mirroringEndpointGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointIdInput">mirroringEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts">GoogleNetworkSecurityMirroringEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointGroup">mirroringEndpointGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointId">mirroringEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference">GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mirroringEndpointGroupInput`<sup>Optional</sup> <a name="mirroringEndpointGroupInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointGroupInput"></a>

```typescript
public readonly mirroringEndpointGroupInput: string;
```

- *Type:* string

---

##### `mirroringEndpointIdInput`<sup>Optional</sup> <a name="mirroringEndpointIdInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointIdInput"></a>

```typescript
public readonly mirroringEndpointIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkSecurityMirroringEndpointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts">GoogleNetworkSecurityMirroringEndpointTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mirroringEndpointGroup`<sup>Required</sup> <a name="mirroringEndpointGroup" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointGroup"></a>

```typescript
public readonly mirroringEndpointGroup: string;
```

- *Type:* string

---

##### `mirroringEndpointId`<sup>Required</sup> <a name="mirroringEndpointId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointId"></a>

```typescript
public readonly mirroringEndpointId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityMirroringEndpointConfig <a name="GoogleNetworkSecurityMirroringEndpointConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.Initializer"></a>

```typescript
import { googleNetworkSecurityMirroringEndpoint } from '@cdktn/provider-google-beta'

const googleNetworkSecurityMirroringEndpointConfig: googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.location">location</a></code> | <code>string</code> | The cloud location of the endpoint, e.g. 'us-central1-a' or 'asia-south1-b'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.mirroringEndpointGroup">mirroringEndpointGroup</a></code> | <code>string</code> | The endpoint group that this endpoint belongs to. Format is: 'projects/{project}/locations/{location}/mirroringEndpointGroups/{mirroringEndpointGroup}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.mirroringEndpointId">mirroringEndpointId</a></code> | <code>string</code> | The ID to use for the new endpoint, which will become the final component of the endpoint's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.description">description</a></code> | <code>string</code> | User-provided description of the endpoint. Used as additional context for the endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#id GoogleNetworkSecurityMirroringEndpoint#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#project GoogleNetworkSecurityMirroringEndpoint#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts">GoogleNetworkSecurityMirroringEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The cloud location of the endpoint, e.g. 'us-central1-a' or 'asia-south1-b'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#location GoogleNetworkSecurityMirroringEndpoint#location}

---

##### `mirroringEndpointGroup`<sup>Required</sup> <a name="mirroringEndpointGroup" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.mirroringEndpointGroup"></a>

```typescript
public readonly mirroringEndpointGroup: string;
```

- *Type:* string

The endpoint group that this endpoint belongs to. Format is: 'projects/{project}/locations/{location}/mirroringEndpointGroups/{mirroringEndpointGroup}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#mirroring_endpoint_group GoogleNetworkSecurityMirroringEndpoint#mirroring_endpoint_group}

---

##### `mirroringEndpointId`<sup>Required</sup> <a name="mirroringEndpointId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.mirroringEndpointId"></a>

```typescript
public readonly mirroringEndpointId: string;
```

- *Type:* string

The ID to use for the new endpoint, which will become the final component of the endpoint's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#mirroring_endpoint_id GoogleNetworkSecurityMirroringEndpoint#mirroring_endpoint_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#deletion_policy GoogleNetworkSecurityMirroringEndpoint#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-provided description of the endpoint. Used as additional context for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#description GoogleNetworkSecurityMirroringEndpoint#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#id GoogleNetworkSecurityMirroringEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#labels GoogleNetworkSecurityMirroringEndpoint#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#project GoogleNetworkSecurityMirroringEndpoint#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityMirroringEndpointTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts">GoogleNetworkSecurityMirroringEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#timeouts GoogleNetworkSecurityMirroringEndpoint#timeouts}

---

### GoogleNetworkSecurityMirroringEndpointTimeouts <a name="GoogleNetworkSecurityMirroringEndpointTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts.Initializer"></a>

```typescript
import { googleNetworkSecurityMirroringEndpoint } from '@cdktn/provider-google-beta'

const googleNetworkSecurityMirroringEndpointTimeouts: googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#create GoogleNetworkSecurityMirroringEndpoint#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#delete GoogleNetworkSecurityMirroringEndpoint#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#update GoogleNetworkSecurityMirroringEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#create GoogleNetworkSecurityMirroringEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#delete GoogleNetworkSecurityMirroringEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_mirroring_endpoint#update GoogleNetworkSecurityMirroringEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference <a name="GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityMirroringEndpoint } from '@cdktn/provider-google-beta'

new googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts">GoogleNetworkSecurityMirroringEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecurityMirroringEndpointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts">GoogleNetworkSecurityMirroringEndpointTimeouts</a>

---



