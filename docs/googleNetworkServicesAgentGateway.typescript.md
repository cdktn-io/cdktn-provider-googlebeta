# `googleNetworkServicesAgentGateway` Submodule <a name="`googleNetworkServicesAgentGateway` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesAgentGateway <a name="GoogleNetworkServicesAgentGateway" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway google_network_services_agent_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

new googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway(scope: Construct, id: string, config: GoogleNetworkServicesAgentGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig">GoogleNetworkServicesAgentGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig">GoogleNetworkServicesAgentGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putGoogleManaged">putGoogleManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putSelfManaged">putSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetGoogleManaged">resetGoogleManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetRegistries">resetRegistries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetSelfManaged">resetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGoogleManaged` <a name="putGoogleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putGoogleManaged"></a>

```typescript
public putGoogleManaged(value: GoogleNetworkServicesAgentGatewayGoogleManaged): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putGoogleManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: GoogleNetworkServicesAgentGatewayNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

---

##### `putSelfManaged` <a name="putSelfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putSelfManaged"></a>

```typescript
public putSelfManaged(value: GoogleNetworkServicesAgentGatewaySelfManaged): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkServicesAgentGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGoogleManaged` <a name="resetGoogleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetGoogleManaged"></a>

```typescript
public resetGoogleManaged(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegistries` <a name="resetRegistries" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetRegistries"></a>

```typescript
public resetRegistries(): void
```

##### `resetSelfManaged` <a name="resetSelfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetSelfManaged"></a>

```typescript
public resetSelfManaged(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesAgentGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isConstruct"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformElement"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformResource"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkServicesAgentGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesAgentGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesAgentGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesAgentGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.agentGatewayCard">agentGatewayCard</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList">GoogleNetworkServicesAgentGatewayAgentGatewayCardList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManaged">googleManaged</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference">GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference">GoogleNetworkServicesAgentGatewaySelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference">GoogleNetworkServicesAgentGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManagedInput">googleManagedInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registriesInput">registriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManagedInput">selfManagedInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registries">registries</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentGatewayCard`<sup>Required</sup> <a name="agentGatewayCard" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.agentGatewayCard"></a>

```typescript
public readonly agentGatewayCard: GoogleNetworkServicesAgentGatewayAgentGatewayCardList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList">GoogleNetworkServicesAgentGatewayAgentGatewayCardList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `googleManaged`<sup>Required</sup> <a name="googleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManaged"></a>

```typescript
public readonly googleManaged: GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference">GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference</a>

---

##### `selfManaged`<sup>Required</sup> <a name="selfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManaged"></a>

```typescript
public readonly selfManaged: GoogleNetworkServicesAgentGatewaySelfManagedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference">GoogleNetworkServicesAgentGatewaySelfManagedOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesAgentGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference">GoogleNetworkServicesAgentGatewayTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `googleManagedInput`<sup>Optional</sup> <a name="googleManagedInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManagedInput"></a>

```typescript
public readonly googleManagedInput: GoogleNetworkServicesAgentGatewayGoogleManaged;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: GoogleNetworkServicesAgentGatewayNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `registriesInput`<sup>Optional</sup> <a name="registriesInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registriesInput"></a>

```typescript
public readonly registriesInput: string[];
```

- *Type:* string[]

---

##### `selfManagedInput`<sup>Optional</sup> <a name="selfManagedInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManagedInput"></a>

```typescript
public readonly selfManagedInput: GoogleNetworkServicesAgentGatewaySelfManaged;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkServicesAgentGatewayTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `registries`<sup>Required</sup> <a name="registries" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registries"></a>

```typescript
public readonly registries: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesAgentGatewayAgentGatewayCard <a name="GoogleNetworkServicesAgentGatewayAgentGatewayCard" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard.Initializer"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

const googleNetworkServicesAgentGatewayAgentGatewayCard: googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard = { ... }
```


### GoogleNetworkServicesAgentGatewayConfig <a name="GoogleNetworkServicesAgentGatewayConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.Initializer"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

const googleNetworkServicesAgentGatewayConfig: googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.location">location</a></code> | <code>string</code> | The location of the agent gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.name">name</a></code> | <code>string</code> | Name of the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.protocols">protocols</a></code> | <code>string[]</code> | List of protocols supported by an Agent Gateway. Possible values: ["MCP"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.googleManaged">googleManaged</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a></code> | google_managed block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#id GoogleNetworkServicesAgentGateway#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#project GoogleNetworkServicesAgentGateway#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.registries">registries</a></code> | <code>string[]</code> | A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the agent gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#location GoogleNetworkServicesAgentGateway#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the AgentGateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#name GoogleNetworkServicesAgentGateway#name}

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

List of protocols supported by an Agent Gateway. Possible values: ["MCP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#protocols GoogleNetworkServicesAgentGateway#protocols}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#deletion_policy GoogleNetworkServicesAgentGateway#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#description GoogleNetworkServicesAgentGateway#description}

---

##### `googleManaged`<sup>Optional</sup> <a name="googleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.googleManaged"></a>

```typescript
public readonly googleManaged: GoogleNetworkServicesAgentGatewayGoogleManaged;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

google_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#google_managed GoogleNetworkServicesAgentGateway#google_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#id GoogleNetworkServicesAgentGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the AgentGateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#labels GoogleNetworkServicesAgentGateway#labels}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleNetworkServicesAgentGatewayNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#network_config GoogleNetworkServicesAgentGateway#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#project GoogleNetworkServicesAgentGateway#project}.

---

##### `registries`<sup>Optional</sup> <a name="registries" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.registries"></a>

```typescript
public readonly registries: string[];
```

- *Type:* string[]

A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway.

Note: Currently limited to project-scoped registries Must be of format
'//agentregistry.googleapis.com/{version}/projects/{{project}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#registries GoogleNetworkServicesAgentGateway#registries}

---

##### `selfManaged`<sup>Optional</sup> <a name="selfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.selfManaged"></a>

```typescript
public readonly selfManaged: GoogleNetworkServicesAgentGatewaySelfManaged;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#self_managed GoogleNetworkServicesAgentGateway#self_managed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesAgentGatewayTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#timeouts GoogleNetworkServicesAgentGateway#timeouts}

---

### GoogleNetworkServicesAgentGatewayGoogleManaged <a name="GoogleNetworkServicesAgentGatewayGoogleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged.Initializer"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

const googleNetworkServicesAgentGatewayGoogleManaged: googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged.property.governedAccessPath">governedAccessPath</a></code> | <code>string</code> | Operating Mode of Agent Gateway. Possible values: ["AGENT_TO_ANYWHERE", "CLIENT_TO_AGENT"]. |

---

##### `governedAccessPath`<sup>Required</sup> <a name="governedAccessPath" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged.property.governedAccessPath"></a>

```typescript
public readonly governedAccessPath: string;
```

- *Type:* string

Operating Mode of Agent Gateway. Possible values: ["AGENT_TO_ANYWHERE", "CLIENT_TO_AGENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#governed_access_path GoogleNetworkServicesAgentGateway#governed_access_path}

---

### GoogleNetworkServicesAgentGatewayNetworkConfig <a name="GoogleNetworkServicesAgentGatewayNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig.Initializer"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

const googleNetworkServicesAgentGatewayNetworkConfig: googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig.property.egress">egress</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a></code> | egress block. |

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig.property.egress"></a>

```typescript
public readonly egress: GoogleNetworkServicesAgentGatewayNetworkConfigEgress;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#egress GoogleNetworkServicesAgentGateway#egress}

---

### GoogleNetworkServicesAgentGatewayNetworkConfigEgress <a name="GoogleNetworkServicesAgentGatewayNetworkConfigEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress.Initializer"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

const googleNetworkServicesAgentGatewayNetworkConfigEgress: googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | The URI of the Network Attachment resource. |

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

The URI of the Network Attachment resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#network_attachment GoogleNetworkServicesAgentGateway#network_attachment}

---

### GoogleNetworkServicesAgentGatewaySelfManaged <a name="GoogleNetworkServicesAgentGatewaySelfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged.Initializer"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

const googleNetworkServicesAgentGatewaySelfManaged: googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged.property.resourceUri">resourceUri</a></code> | <code>string</code> | A supported Google Cloud networking proxy in the Project and Location. |

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged.property.resourceUri"></a>

```typescript
public readonly resourceUri: string;
```

- *Type:* string

A supported Google Cloud networking proxy in the Project and Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#resource_uri GoogleNetworkServicesAgentGateway#resource_uri}

---

### GoogleNetworkServicesAgentGatewayTimeouts <a name="GoogleNetworkServicesAgentGatewayTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.Initializer"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

const googleNetworkServicesAgentGatewayTimeouts: googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#create GoogleNetworkServicesAgentGateway#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#delete GoogleNetworkServicesAgentGateway#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#update GoogleNetworkServicesAgentGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#create GoogleNetworkServicesAgentGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#delete GoogleNetworkServicesAgentGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#update GoogleNetworkServicesAgentGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesAgentGatewayAgentGatewayCardList <a name="GoogleNetworkServicesAgentGatewayAgentGatewayCardList" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

new googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference <a name="GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

new googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.mtlsEndpoint">mtlsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.rootCertificates">rootCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.serviceExtensionsServiceAccount">serviceExtensionsServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard">GoogleNetworkServicesAgentGatewayAgentGatewayCard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mtlsEndpoint`<sup>Required</sup> <a name="mtlsEndpoint" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.mtlsEndpoint"></a>

```typescript
public readonly mtlsEndpoint: string;
```

- *Type:* string

---

##### `rootCertificates`<sup>Required</sup> <a name="rootCertificates" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.rootCertificates"></a>

```typescript
public readonly rootCertificates: string[];
```

- *Type:* string[]

---

##### `serviceExtensionsServiceAccount`<sup>Required</sup> <a name="serviceExtensionsServiceAccount" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.serviceExtensionsServiceAccount"></a>

```typescript
public readonly serviceExtensionsServiceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesAgentGatewayAgentGatewayCard;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard">GoogleNetworkServicesAgentGatewayAgentGatewayCard</a>

---


### GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference <a name="GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

new googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPathInput">governedAccessPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPath">governedAccessPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `governedAccessPathInput`<sup>Optional</sup> <a name="governedAccessPathInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPathInput"></a>

```typescript
public readonly governedAccessPathInput: string;
```

- *Type:* string

---

##### `governedAccessPath`<sup>Required</sup> <a name="governedAccessPath" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPath"></a>

```typescript
public readonly governedAccessPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesAgentGatewayGoogleManaged;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

---


### GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference <a name="GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

new googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachmentInput"></a>

```typescript
public readonly networkAttachmentInput: string;
```

- *Type:* string

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesAgentGatewayNetworkConfigEgress;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

---


### GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference <a name="GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

new googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress">putEgress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgress` <a name="putEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress"></a>

```typescript
public putEgress(value: GoogleNetworkServicesAgentGatewayNetworkConfigEgress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egress">egress</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egressInput">egressInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egress"></a>

```typescript
public readonly egress: GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference</a>

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egressInput"></a>

```typescript
public readonly egressInput: GoogleNetworkServicesAgentGatewayNetworkConfigEgress;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesAgentGatewayNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

---


### GoogleNetworkServicesAgentGatewaySelfManagedOutputReference <a name="GoogleNetworkServicesAgentGatewaySelfManagedOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

new googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUriInput">resourceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUri">resourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceUriInput`<sup>Optional</sup> <a name="resourceUriInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUriInput"></a>

```typescript
public readonly resourceUriInput: string;
```

- *Type:* string

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUri"></a>

```typescript
public readonly resourceUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesAgentGatewaySelfManaged;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

---


### GoogleNetworkServicesAgentGatewayTimeoutsOutputReference <a name="GoogleNetworkServicesAgentGatewayTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesAgentGateway } from '@cdktn/provider-google-beta'

new googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesAgentGatewayTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

---



