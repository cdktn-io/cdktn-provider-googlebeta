# `googleNetworkSecurityUllMirroringCollectorRule` Submodule <a name="`googleNetworkSecurityUllMirroringCollectorRule` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityUllMirroringCollectorRule <a name="GoogleNetworkSecurityUllMirroringCollectorRule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule google_network_security_ull_mirroring_collector_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer"></a>

```typescript
import { googleNetworkSecurityUllMirroringCollectorRule } from '@cdktn/provider-google-beta'

new googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule(scope: Construct, id: string, config: GoogleNetworkSecurityUllMirroringCollectorRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig">GoogleNetworkSecurityUllMirroringCollectorRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig">GoogleNetworkSecurityUllMirroringCollectorRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMatch` <a name="putMatch" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putMatch"></a>

```typescript
public putMatch(value: GoogleNetworkSecurityUllMirroringCollectorRuleMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityUllMirroringCollectorRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isConstruct"></a>

```typescript
import { googleNetworkSecurityUllMirroringCollectorRule } from '@cdktn/provider-google-beta'

googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformElement"></a>

```typescript
import { googleNetworkSecurityUllMirroringCollectorRule } from '@cdktn/provider-google-beta'

googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformResource"></a>

```typescript
import { googleNetworkSecurityUllMirroringCollectorRule } from '@cdktn/provider-google-beta'

googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport"></a>

```typescript
import { googleNetworkSecurityUllMirroringCollectorRule } from '@cdktn/provider-google-beta'

googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkSecurityUllMirroringCollectorRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityUllMirroringCollectorRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityUllMirroringCollectorRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityUllMirroringCollectorRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.matchInput">matchInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorInput">ullMirroringCollectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleIdInput">ullMirroringCollectorRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollector">ullMirroringCollector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleId">ullMirroringCollectorRuleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.match"></a>

```typescript
public readonly match: GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.matchInput"></a>

```typescript
public readonly matchInput: GoogleNetworkSecurityUllMirroringCollectorRuleMatch;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a>

---

##### `ullMirroringCollectorInput`<sup>Optional</sup> <a name="ullMirroringCollectorInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorInput"></a>

```typescript
public readonly ullMirroringCollectorInput: string;
```

- *Type:* string

---

##### `ullMirroringCollectorRuleIdInput`<sup>Optional</sup> <a name="ullMirroringCollectorRuleIdInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleIdInput"></a>

```typescript
public readonly ullMirroringCollectorRuleIdInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `ullMirroringCollector`<sup>Required</sup> <a name="ullMirroringCollector" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollector"></a>

```typescript
public readonly ullMirroringCollector: string;
```

- *Type:* string

---

##### `ullMirroringCollectorRuleId`<sup>Required</sup> <a name="ullMirroringCollectorRuleId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleId"></a>

```typescript
public readonly ullMirroringCollectorRuleId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityUllMirroringCollectorRuleConfig <a name="GoogleNetworkSecurityUllMirroringCollectorRuleConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.Initializer"></a>

```typescript
import { googleNetworkSecurityUllMirroringCollectorRule } from '@cdktn/provider-google-beta'

const googleNetworkSecurityUllMirroringCollectorRuleConfig: googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollector">ullMirroringCollector</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollectorRuleId">ullMirroringCollectorRuleId</a></code> | <code>string</code> | ID for the new UllMirroringCollectorRule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#id GoogleNetworkSecurityUllMirroringCollectorRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#project GoogleNetworkSecurityUllMirroringCollectorRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#location GoogleNetworkSecurityUllMirroringCollectorRule#location}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.match"></a>

```typescript
public readonly match: GoogleNetworkSecurityUllMirroringCollectorRuleMatch;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#match GoogleNetworkSecurityUllMirroringCollectorRule#match}

---

##### `ullMirroringCollector`<sup>Required</sup> <a name="ullMirroringCollector" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollector"></a>

```typescript
public readonly ullMirroringCollector: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ull_mirroring_collector GoogleNetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector}

---

##### `ullMirroringCollectorRuleId`<sup>Required</sup> <a name="ullMirroringCollectorRuleId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollectorRuleId"></a>

```typescript
public readonly ullMirroringCollectorRuleId: string;
```

- *Type:* string

ID for the new UllMirroringCollectorRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ull_mirroring_collector_rule_id GoogleNetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector_rule_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#deletion_policy GoogleNetworkSecurityUllMirroringCollectorRule#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#id GoogleNetworkSecurityUllMirroringCollectorRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#labels GoogleNetworkSecurityUllMirroringCollectorRule#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#project GoogleNetworkSecurityUllMirroringCollectorRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#timeouts GoogleNetworkSecurityUllMirroringCollectorRule#timeouts}

---

### GoogleNetworkSecurityUllMirroringCollectorRuleMatch <a name="GoogleNetworkSecurityUllMirroringCollectorRuleMatch" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.Initializer"></a>

```typescript
import { googleNetworkSecurityUllMirroringCollectorRule } from '@cdktn/provider-google-beta'

const googleNetworkSecurityUllMirroringCollectorRuleMatch: googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.direction">direction</a></code> | <code>string</code> | Direction of traffic to match. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.dstIpRanges">dstIpRanges</a></code> | <code>string[]</code> | Destination IP ranges to match. When unset, matches any destination IP range. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.ipProtocols">ipProtocols</a></code> | <code>string[]</code> | IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | Source IP ranges to match. When unset, matches any source IP range. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Direction of traffic to match.

When unset, matches any direction.
Possible values:
INGRESS: Traffic inbound to the capture point.
EGRESS: Traffic outbound from the capture point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#direction GoogleNetworkSecurityUllMirroringCollectorRule#direction}

---

##### `dstIpRanges`<sup>Optional</sup> <a name="dstIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.dstIpRanges"></a>

```typescript
public readonly dstIpRanges: string[];
```

- *Type:* string[]

Destination IP ranges to match. When unset, matches any destination IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#dst_ip_ranges GoogleNetworkSecurityUllMirroringCollectorRule#dst_ip_ranges}

---

##### `ipProtocols`<sup>Optional</sup> <a name="ipProtocols" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.ipProtocols"></a>

```typescript
public readonly ipProtocols: string[];
```

- *Type:* string[]

IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ip_protocols GoogleNetworkSecurityUllMirroringCollectorRule#ip_protocols}

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

Source IP ranges to match. When unset, matches any source IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#src_ip_ranges GoogleNetworkSecurityUllMirroringCollectorRule#src_ip_ranges}

---

### GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts <a name="GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.Initializer"></a>

```typescript
import { googleNetworkSecurityUllMirroringCollectorRule } from '@cdktn/provider-google-beta'

const googleNetworkSecurityUllMirroringCollectorRuleTimeouts: googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#create GoogleNetworkSecurityUllMirroringCollectorRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#delete GoogleNetworkSecurityUllMirroringCollectorRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#update GoogleNetworkSecurityUllMirroringCollectorRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#create GoogleNetworkSecurityUllMirroringCollectorRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#delete GoogleNetworkSecurityUllMirroringCollectorRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_ull_mirroring_collector_rule#update GoogleNetworkSecurityUllMirroringCollectorRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference <a name="GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityUllMirroringCollectorRule } from '@cdktn/provider-google-beta'

new googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDstIpRanges">resetDstIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetIpProtocols">resetIpProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetDstIpRanges` <a name="resetDstIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDstIpRanges"></a>

```typescript
public resetDstIpRanges(): void
```

##### `resetIpProtocols` <a name="resetIpProtocols" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetIpProtocols"></a>

```typescript
public resetIpProtocols(): void
```

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetSrcIpRanges"></a>

```typescript
public resetSrcIpRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRangesInput">dstIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocolsInput">ipProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRanges">dstIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocols">ipProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `dstIpRangesInput`<sup>Optional</sup> <a name="dstIpRangesInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRangesInput"></a>

```typescript
public readonly dstIpRangesInput: string[];
```

- *Type:* string[]

---

##### `ipProtocolsInput`<sup>Optional</sup> <a name="ipProtocolsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocolsInput"></a>

```typescript
public readonly ipProtocolsInput: string[];
```

- *Type:* string[]

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRangesInput"></a>

```typescript
public readonly srcIpRangesInput: string[];
```

- *Type:* string[]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `dstIpRanges`<sup>Required</sup> <a name="dstIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRanges"></a>

```typescript
public readonly dstIpRanges: string[];
```

- *Type:* string[]

---

##### `ipProtocols`<sup>Required</sup> <a name="ipProtocols" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocols"></a>

```typescript
public readonly ipProtocols: string[];
```

- *Type:* string[]

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecurityUllMirroringCollectorRuleMatch;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

---


### GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference <a name="GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityUllMirroringCollectorRule } from '@cdktn/provider-google-beta'

new googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a>

---



