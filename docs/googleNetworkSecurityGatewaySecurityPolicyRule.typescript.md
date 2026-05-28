# `googleNetworkSecurityGatewaySecurityPolicyRule` Submodule <a name="`googleNetworkSecurityGatewaySecurityPolicyRule` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityGatewaySecurityPolicyRule <a name="GoogleNetworkSecurityGatewaySecurityPolicyRule" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule google_network_security_gateway_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicyRule } from '@cdktn/provider-google-beta'

new googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule(scope: Construct, id: string, config: GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig">GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig">GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetApplicationMatcher">resetApplicationMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetTlsInspectionEnabled">resetTlsInspectionEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>

---

##### `resetApplicationMatcher` <a name="resetApplicationMatcher" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetApplicationMatcher"></a>

```typescript
public resetApplicationMatcher(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsInspectionEnabled` <a name="resetTlsInspectionEnabled" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetTlsInspectionEnabled"></a>

```typescript
public resetTlsInspectionEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityGatewaySecurityPolicyRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isConstruct"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicyRule } from '@cdktn/provider-google-beta'

googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformElement"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicyRule } from '@cdktn/provider-google-beta'

googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformResource"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicyRule } from '@cdktn/provider-google-beta'

googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicyRule } from '@cdktn/provider-google-beta'

googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkSecurityGatewaySecurityPolicyRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityGatewaySecurityPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityGatewaySecurityPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityGatewaySecurityPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcherInput">applicationMatcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.basicProfileInput">basicProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicyInput">gatewaySecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcherInput">sessionMatcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabledInput">tlsInspectionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcher">applicationMatcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.basicProfile">basicProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicy">gatewaySecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcher">sessionMatcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabled">tlsInspectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `applicationMatcherInput`<sup>Optional</sup> <a name="applicationMatcherInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcherInput"></a>

```typescript
public readonly applicationMatcherInput: string;
```

- *Type:* string

---

##### `basicProfileInput`<sup>Optional</sup> <a name="basicProfileInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.basicProfileInput"></a>

```typescript
public readonly basicProfileInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `gatewaySecurityPolicyInput`<sup>Optional</sup> <a name="gatewaySecurityPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicyInput"></a>

```typescript
public readonly gatewaySecurityPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sessionMatcherInput`<sup>Optional</sup> <a name="sessionMatcherInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcherInput"></a>

```typescript
public readonly sessionMatcherInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>

---

##### `tlsInspectionEnabledInput`<sup>Optional</sup> <a name="tlsInspectionEnabledInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabledInput"></a>

```typescript
public readonly tlsInspectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `applicationMatcher`<sup>Required</sup> <a name="applicationMatcher" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcher"></a>

```typescript
public readonly applicationMatcher: string;
```

- *Type:* string

---

##### `basicProfile`<sup>Required</sup> <a name="basicProfile" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.basicProfile"></a>

```typescript
public readonly basicProfile: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `gatewaySecurityPolicy`<sup>Required</sup> <a name="gatewaySecurityPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicy"></a>

```typescript
public readonly gatewaySecurityPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `sessionMatcher`<sup>Required</sup> <a name="sessionMatcher" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcher"></a>

```typescript
public readonly sessionMatcher: string;
```

- *Type:* string

---

##### `tlsInspectionEnabled`<sup>Required</sup> <a name="tlsInspectionEnabled" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabled"></a>

```typescript
public readonly tlsInspectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig <a name="GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.Initializer"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicyRule } from '@cdktn/provider-google-beta'

const googleNetworkSecurityGatewaySecurityPolicyRuleConfig: googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.basicProfile">basicProfile</a></code> | <code>string</code> | Profile which tells what the primitive action should be. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the rule is enforced. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.gatewaySecurityPolicy">gatewaySecurityPolicy</a></code> | <code>string</code> | The name of the gatewat security policy this rule belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.location">location</a></code> | <code>string</code> | The location of the gateway security policy. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^a-z?$). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.priority">priority</a></code> | <code>number</code> | Priority of the rule. Lower number corresponds to higher precedence. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.sessionMatcher">sessionMatcher</a></code> | <code>string</code> | CEL expression for matching on session criteria. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.applicationMatcher">applicationMatcher</a></code> | <code>string</code> | CEL expression for matching on L7/application level criteria. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.description">description</a></code> | <code>string</code> | Free-text description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#id GoogleNetworkSecurityGatewaySecurityPolicyRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#project GoogleNetworkSecurityGatewaySecurityPolicyRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.tlsInspectionEnabled">tlsInspectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag to enable TLS inspection of traffic matching on. Can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `basicProfile`<sup>Required</sup> <a name="basicProfile" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.basicProfile"></a>

```typescript
public readonly basicProfile: string;
```

- *Type:* string

Profile which tells what the primitive action should be.

Possible values are: * ALLOW * DENY. Possible values: ["BASIC_PROFILE_UNSPECIFIED", "ALLOW", "DENY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#basic_profile GoogleNetworkSecurityGatewaySecurityPolicyRule#basic_profile}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the rule is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#enabled GoogleNetworkSecurityGatewaySecurityPolicyRule#enabled}

---

##### `gatewaySecurityPolicy`<sup>Required</sup> <a name="gatewaySecurityPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.gatewaySecurityPolicy"></a>

```typescript
public readonly gatewaySecurityPolicy: string;
```

- *Type:* string

The name of the gatewat security policy this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#gateway_security_policy GoogleNetworkSecurityGatewaySecurityPolicyRule#gateway_security_policy}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the gateway security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#location GoogleNetworkSecurityGatewaySecurityPolicyRule#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#name GoogleNetworkSecurityGatewaySecurityPolicyRule#name}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Priority of the rule. Lower number corresponds to higher precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#priority GoogleNetworkSecurityGatewaySecurityPolicyRule#priority}

---

##### `sessionMatcher`<sup>Required</sup> <a name="sessionMatcher" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.sessionMatcher"></a>

```typescript
public readonly sessionMatcher: string;
```

- *Type:* string

CEL expression for matching on session criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#session_matcher GoogleNetworkSecurityGatewaySecurityPolicyRule#session_matcher}

---

##### `applicationMatcher`<sup>Optional</sup> <a name="applicationMatcher" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.applicationMatcher"></a>

```typescript
public readonly applicationMatcher: string;
```

- *Type:* string

CEL expression for matching on L7/application level criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#application_matcher GoogleNetworkSecurityGatewaySecurityPolicyRule#application_matcher}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#deletion_policy GoogleNetworkSecurityGatewaySecurityPolicyRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#description GoogleNetworkSecurityGatewaySecurityPolicyRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#id GoogleNetworkSecurityGatewaySecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#project GoogleNetworkSecurityGatewaySecurityPolicyRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#timeouts GoogleNetworkSecurityGatewaySecurityPolicyRule#timeouts}

---

##### `tlsInspectionEnabled`<sup>Optional</sup> <a name="tlsInspectionEnabled" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.tlsInspectionEnabled"></a>

```typescript
public readonly tlsInspectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag to enable TLS inspection of traffic matching on. Can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#tls_inspection_enabled GoogleNetworkSecurityGatewaySecurityPolicyRule#tls_inspection_enabled}

---

### GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts <a name="GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.Initializer"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicyRule } from '@cdktn/provider-google-beta'

const googleNetworkSecurityGatewaySecurityPolicyRuleTimeouts: googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#create GoogleNetworkSecurityGatewaySecurityPolicyRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#delete GoogleNetworkSecurityGatewaySecurityPolicyRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#update GoogleNetworkSecurityGatewaySecurityPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#create GoogleNetworkSecurityGatewaySecurityPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#delete GoogleNetworkSecurityGatewaySecurityPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_gateway_security_policy_rule#update GoogleNetworkSecurityGatewaySecurityPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference <a name="GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicyRule } from '@cdktn/provider-google-beta'

new googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>

---



