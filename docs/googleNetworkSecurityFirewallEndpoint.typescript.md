# `googleNetworkSecurityFirewallEndpoint` Submodule <a name="`googleNetworkSecurityFirewallEndpoint` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityFirewallEndpoint <a name="GoogleNetworkSecurityFirewallEndpoint" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint google_network_security_firewall_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer"></a>

```typescript
import { googleNetworkSecurityFirewallEndpoint } from '@cdktn/provider-google-beta'

new googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint(scope: Construct, id: string, config: GoogleNetworkSecurityFirewallEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig">GoogleNetworkSecurityFirewallEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig">GoogleNetworkSecurityFirewallEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putEndpointSettings">putEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetBillingProjectId">resetBillingProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetEndpointSettings">resetEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointSettings` <a name="putEndpointSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putEndpointSettings"></a>

```typescript
public putEndpointSettings(value: GoogleNetworkSecurityFirewallEndpointEndpointSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putEndpointSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkSecurityFirewallEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a>

---

##### `resetBillingProjectId` <a name="resetBillingProjectId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetBillingProjectId"></a>

```typescript
public resetBillingProjectId(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEndpointSettings` <a name="resetEndpointSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetEndpointSettings"></a>

```typescript
public resetEndpointSettings(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityFirewallEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isConstruct"></a>

```typescript
import { googleNetworkSecurityFirewallEndpoint } from '@cdktn/provider-google-beta'

googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformElement"></a>

```typescript
import { googleNetworkSecurityFirewallEndpoint } from '@cdktn/provider-google-beta'

googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformResource"></a>

```typescript
import { googleNetworkSecurityFirewallEndpoint } from '@cdktn/provider-google-beta'

googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport"></a>

```typescript
import { googleNetworkSecurityFirewallEndpoint } from '@cdktn/provider-google-beta'

googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkSecurityFirewallEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityFirewallEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityFirewallEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityFirewallEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.associatedNetworks">associatedNetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.endpointSettings">endpointSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference">GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference">GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.billingProjectIdInput">billingProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.endpointSettingsInput">endpointSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.billingProjectId">billingProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associatedNetworks`<sup>Required</sup> <a name="associatedNetworks" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.associatedNetworks"></a>

```typescript
public readonly associatedNetworks: string[];
```

- *Type:* string[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `endpointSettings`<sup>Required</sup> <a name="endpointSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.endpointSettings"></a>

```typescript
public readonly endpointSettings: GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference">GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference">GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `billingProjectIdInput`<sup>Optional</sup> <a name="billingProjectIdInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.billingProjectIdInput"></a>

```typescript
public readonly billingProjectIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `endpointSettingsInput`<sup>Optional</sup> <a name="endpointSettingsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.endpointSettingsInput"></a>

```typescript
public readonly endpointSettingsInput: GoogleNetworkSecurityFirewallEndpointEndpointSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkSecurityFirewallEndpointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a>

---

##### `billingProjectId`<sup>Required</sup> <a name="billingProjectId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.billingProjectId"></a>

```typescript
public readonly billingProjectId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityFirewallEndpointConfig <a name="GoogleNetworkSecurityFirewallEndpointConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.Initializer"></a>

```typescript
import { googleNetworkSecurityFirewallEndpoint } from '@cdktn/provider-google-beta'

const googleNetworkSecurityFirewallEndpointConfig: googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.location">location</a></code> | <code>string</code> | The location (zone) of the firewall endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.name">name</a></code> | <code>string</code> | The name of the firewall endpoint resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.parent">parent</a></code> | <code>string</code> | The name of the parent this firewall endpoint belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.billingProjectId">billingProjectId</a></code> | <code>string</code> | Project to charge for the deployed firewall endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.endpointSettings">endpointSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a></code> | endpoint_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#id GoogleNetworkSecurityFirewallEndpoint#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location (zone) of the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#location GoogleNetworkSecurityFirewallEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the firewall endpoint resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#name GoogleNetworkSecurityFirewallEndpoint#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The name of the parent this firewall endpoint belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#parent GoogleNetworkSecurityFirewallEndpoint#parent}

---

##### `billingProjectId`<sup>Optional</sup> <a name="billingProjectId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.billingProjectId"></a>

```typescript
public readonly billingProjectId: string;
```

- *Type:* string

Project to charge for the deployed firewall endpoint.

This field is required for organization-scoped endpoints.
For project-scoped endpoints, it is optional but must match the
endpoint's project if specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#billing_project_id GoogleNetworkSecurityFirewallEndpoint#billing_project_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#deletion_policy GoogleNetworkSecurityFirewallEndpoint#deletion_policy}

---

##### `endpointSettings`<sup>Optional</sup> <a name="endpointSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.endpointSettings"></a>

```typescript
public readonly endpointSettings: GoogleNetworkSecurityFirewallEndpointEndpointSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a>

endpoint_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#endpoint_settings GoogleNetworkSecurityFirewallEndpoint#endpoint_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#id GoogleNetworkSecurityFirewallEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#labels GoogleNetworkSecurityFirewallEndpoint#labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityFirewallEndpointTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#timeouts GoogleNetworkSecurityFirewallEndpoint#timeouts}

---

### GoogleNetworkSecurityFirewallEndpointEndpointSettings <a name="GoogleNetworkSecurityFirewallEndpointEndpointSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings.Initializer"></a>

```typescript
import { googleNetworkSecurityFirewallEndpoint } from '@cdktn/provider-google-beta'

const googleNetworkSecurityFirewallEndpointEndpointSettings: googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings.property.jumboFramesEnabled">jumboFramesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether Jumbo Frames are enabled for the firewall endpoint. |

---

##### `jumboFramesEnabled`<sup>Optional</sup> <a name="jumboFramesEnabled" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings.property.jumboFramesEnabled"></a>

```typescript
public readonly jumboFramesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether Jumbo Frames are enabled for the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#jumbo_frames_enabled GoogleNetworkSecurityFirewallEndpoint#jumbo_frames_enabled}

---

### GoogleNetworkSecurityFirewallEndpointTimeouts <a name="GoogleNetworkSecurityFirewallEndpointTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.Initializer"></a>

```typescript
import { googleNetworkSecurityFirewallEndpoint } from '@cdktn/provider-google-beta'

const googleNetworkSecurityFirewallEndpointTimeouts: googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#create GoogleNetworkSecurityFirewallEndpoint#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#delete GoogleNetworkSecurityFirewallEndpoint#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#update GoogleNetworkSecurityFirewallEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#create GoogleNetworkSecurityFirewallEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#delete GoogleNetworkSecurityFirewallEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_firewall_endpoint#update GoogleNetworkSecurityFirewallEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference <a name="GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityFirewallEndpoint } from '@cdktn/provider-google-beta'

new googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetJumboFramesEnabled">resetJumboFramesEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJumboFramesEnabled` <a name="resetJumboFramesEnabled" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetJumboFramesEnabled"></a>

```typescript
public resetJumboFramesEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabledInput">jumboFramesEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabled">jumboFramesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jumboFramesEnabledInput`<sup>Optional</sup> <a name="jumboFramesEnabledInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabledInput"></a>

```typescript
public readonly jumboFramesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jumboFramesEnabled`<sup>Required</sup> <a name="jumboFramesEnabled" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabled"></a>

```typescript
public readonly jumboFramesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecurityFirewallEndpointEndpointSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a>

---


### GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference <a name="GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityFirewallEndpoint } from '@cdktn/provider-google-beta'

new googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecurityFirewallEndpointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a>

---



