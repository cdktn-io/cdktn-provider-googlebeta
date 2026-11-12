# `googleDialogflowCompanionAgent` Submodule <a name="`googleDialogflowCompanionAgent` Submodule" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCompanionAgent <a name="GoogleDialogflowCompanionAgent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent google_dialogflow_companion_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent(scope: Construct, id: string, config: GoogleDialogflowCompanionAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig">GoogleDialogflowCompanionAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig">GoogleDialogflowCompanionAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putCesToolSpecs">putCesToolSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putSkillConfigs">putSkillConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putToolsetTools">putToolsetTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetCesToolSpecs">resetCesToolSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetSkillConfigs">resetSkillConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetToolsetTools">resetToolsetTools</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCesToolSpecs` <a name="putCesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putCesToolSpecs"></a>

```typescript
public putCesToolSpecs(value: IResolvable | GoogleDialogflowCompanionAgentCesToolSpecs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putCesToolSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>[]

---

##### `putSkillConfigs` <a name="putSkillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putSkillConfigs"></a>

```typescript
public putSkillConfigs(value: IResolvable | GoogleDialogflowCompanionAgentSkillConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putSkillConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDialogflowCompanionAgentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a>

---

##### `putToolsetTools` <a name="putToolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putToolsetTools"></a>

```typescript
public putToolsetTools(value: IResolvable | GoogleDialogflowCompanionAgentToolsetTools[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putToolsetTools.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>[]

---

##### `resetCesToolSpecs` <a name="resetCesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetCesToolSpecs"></a>

```typescript
public resetCesToolSpecs(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSkillConfigs` <a name="resetSkillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetSkillConfigs"></a>

```typescript
public resetSkillConfigs(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetToolsetTools` <a name="resetToolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetToolsetTools"></a>

```typescript
public resetToolsetTools(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowCompanionAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isConstruct"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformElement"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformResource"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDialogflowCompanionAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowCompanionAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowCompanionAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCompanionAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecs">cesToolSpecs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList">GoogleDialogflowCompanionAgentCesToolSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigs">skillConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList">GoogleDialogflowCompanionAgentSkillConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference">GoogleDialogflowCompanionAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetTools">toolsetTools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList">GoogleDialogflowCompanionAgentToolsetToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecsInput">cesToolSpecsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentIdInput">companionAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigsInput">skillConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetToolsInput">toolsetToolsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentId">companionAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cesToolSpecs`<sup>Required</sup> <a name="cesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecs"></a>

```typescript
public readonly cesToolSpecs: GoogleDialogflowCompanionAgentCesToolSpecsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList">GoogleDialogflowCompanionAgentCesToolSpecsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `skillConfigs`<sup>Required</sup> <a name="skillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigs"></a>

```typescript
public readonly skillConfigs: GoogleDialogflowCompanionAgentSkillConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList">GoogleDialogflowCompanionAgentSkillConfigsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCompanionAgentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference">GoogleDialogflowCompanionAgentTimeoutsOutputReference</a>

---

##### `toolsetTools`<sup>Required</sup> <a name="toolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetTools"></a>

```typescript
public readonly toolsetTools: GoogleDialogflowCompanionAgentToolsetToolsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList">GoogleDialogflowCompanionAgentToolsetToolsList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `cesToolSpecsInput`<sup>Optional</sup> <a name="cesToolSpecsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecsInput"></a>

```typescript
public readonly cesToolSpecsInput: IResolvable | GoogleDialogflowCompanionAgentCesToolSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>[]

---

##### `companionAgentIdInput`<sup>Optional</sup> <a name="companionAgentIdInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentIdInput"></a>

```typescript
public readonly companionAgentIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `skillConfigsInput`<sup>Optional</sup> <a name="skillConfigsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigsInput"></a>

```typescript
public readonly skillConfigsInput: IResolvable | GoogleDialogflowCompanionAgentSkillConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDialogflowCompanionAgentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a>

---

##### `toolsetToolsInput`<sup>Optional</sup> <a name="toolsetToolsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetToolsInput"></a>

```typescript
public readonly toolsetToolsInput: IResolvable | GoogleDialogflowCompanionAgentToolsetTools[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>[]

---

##### `companionAgentId`<sup>Required</sup> <a name="companionAgentId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentId"></a>

```typescript
public readonly companionAgentId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCompanionAgentCesToolSpecs <a name="GoogleDialogflowCompanionAgentCesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

const googleDialogflowCompanionAgentCesToolSpecs: googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.cesTool">cesTool</a></code> | <code>string</code> | The resource name of the CES tool. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.confirmationRequirement">confirmationRequirement</a></code> | <code>string</code> | Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.parameterOverrides">parameterOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>[]</code> | parameter_overrides block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.proactiveEnabled">proactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the tool is enabled in proactive mode. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.reactiveEnabled">reactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the tool is enabled in reactive mode. |

---

##### `cesTool`<sup>Optional</sup> <a name="cesTool" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.cesTool"></a>

```typescript
public readonly cesTool: string;
```

- *Type:* string

The resource name of the CES tool. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#ces_tool GoogleDialogflowCompanionAgent#ces_tool}

---

##### `confirmationRequirement`<sup>Optional</sup> <a name="confirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.confirmationRequirement"></a>

```typescript
public readonly confirmationRequirement: string;
```

- *Type:* string

Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#confirmation_requirement GoogleDialogflowCompanionAgent#confirmation_requirement}

---

##### `parameterOverrides`<sup>Optional</sup> <a name="parameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.parameterOverrides"></a>

```typescript
public readonly parameterOverrides: IResolvable | GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>[]

parameter_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_overrides GoogleDialogflowCompanionAgent#parameter_overrides}

---

##### `proactiveEnabled`<sup>Optional</sup> <a name="proactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.proactiveEnabled"></a>

```typescript
public readonly proactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the tool is enabled in proactive mode.

All tools are enabled in proactive mode by default. To disable a tool in proactive mode, set this field to 'false'.
NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#proactive_enabled GoogleDialogflowCompanionAgent#proactive_enabled}

---

##### `reactiveEnabled`<sup>Optional</sup> <a name="reactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.reactiveEnabled"></a>

```typescript
public readonly reactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the tool is enabled in reactive mode.

All tools are disabled in reactive mode by default. To enable a tool in reactive mode, set this field to 'true'.
NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the tool will be ignored. CompanionAgent config will throw an error if any unsupported tool is enabled in reactive mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#reactive_enabled GoogleDialogflowCompanionAgent#reactive_enabled}

---

### GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides <a name="GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

const googleDialogflowCompanionAgentCesToolSpecsParameterOverrides: googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.contextReferenceKey">contextReferenceKey</a></code> | <code>string</code> | The key of the context reference in ingested context references. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.parameterName">parameterName</a></code> | <code>string</code> | The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.fieldPath">fieldPath</a></code> | <code>string</code> | The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it). |

---

##### `contextReferenceKey`<sup>Required</sup> <a name="contextReferenceKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.contextReferenceKey"></a>

```typescript
public readonly contextReferenceKey: string;
```

- *Type:* string

The key of the context reference in ingested context references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#context_reference_key GoogleDialogflowCompanionAgent#context_reference_key}

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_name GoogleDialogflowCompanionAgent#parameter_name}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#field_path GoogleDialogflowCompanionAgent#field_path}

---

### GoogleDialogflowCompanionAgentConfig <a name="GoogleDialogflowCompanionAgentConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

const googleDialogflowCompanionAgentConfig: googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.companionAgentId">companionAgentId</a></code> | <code>string</code> | The ID to use for the companion agent, which will become the final component of the companion agent's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.location">location</a></code> | <code>string</code> | The location of the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.cesToolSpecs">cesToolSpecs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>[]</code> | ces_tool_specs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.description">description</a></code> | <code>string</code> | Description for the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name for the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#id GoogleDialogflowCompanionAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#project GoogleDialogflowCompanionAgent#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.skillConfigs">skillConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>[]</code> | skill_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.toolsetTools">toolsetTools</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>[]</code> | toolset_tools block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `companionAgentId`<sup>Required</sup> <a name="companionAgentId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.companionAgentId"></a>

```typescript
public readonly companionAgentId: string;
```

- *Type:* string

The ID to use for the companion agent, which will become the final component of the companion agent's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#companion_agent_id GoogleDialogflowCompanionAgent#companion_agent_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#location GoogleDialogflowCompanionAgent#location}

---

##### `cesToolSpecs`<sup>Optional</sup> <a name="cesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.cesToolSpecs"></a>

```typescript
public readonly cesToolSpecs: IResolvable | GoogleDialogflowCompanionAgentCesToolSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>[]

ces_tool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#ces_tool_specs GoogleDialogflowCompanionAgent#ces_tool_specs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#deletion_policy GoogleDialogflowCompanionAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#description GoogleDialogflowCompanionAgent#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_name GoogleDialogflowCompanionAgent#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#id GoogleDialogflowCompanionAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#project GoogleDialogflowCompanionAgent#project}.

---

##### `skillConfigs`<sup>Optional</sup> <a name="skillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.skillConfigs"></a>

```typescript
public readonly skillConfigs: IResolvable | GoogleDialogflowCompanionAgentSkillConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>[]

skill_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#skill_configs GoogleDialogflowCompanionAgent#skill_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCompanionAgentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#timeouts GoogleDialogflowCompanionAgent#timeouts}

---

##### `toolsetTools`<sup>Optional</sup> <a name="toolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.toolsetTools"></a>

```typescript
public readonly toolsetTools: IResolvable | GoogleDialogflowCompanionAgentToolsetTools[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>[]

toolset_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#toolset_tools GoogleDialogflowCompanionAgent#toolset_tools}

---

### GoogleDialogflowCompanionAgentSkillConfigs <a name="GoogleDialogflowCompanionAgentSkillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

const googleDialogflowCompanionAgentSkillConfigs: googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.guidanceSkillConfig">guidanceSkillConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | guidance_skill_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.skillTriggeringEvent">skillTriggeringEvent</a></code> | <code>string</code> | The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]. |

---

##### `guidanceSkillConfig`<sup>Optional</sup> <a name="guidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.guidanceSkillConfig"></a>

```typescript
public readonly guidanceSkillConfig: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

guidance_skill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#guidance_skill_config GoogleDialogflowCompanionAgent#guidance_skill_config}

---

##### `skillTriggeringEvent`<sup>Optional</sup> <a name="skillTriggeringEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.skillTriggeringEvent"></a>

```typescript
public readonly skillTriggeringEvent: string;
```

- *Type:* string

The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#skill_triggering_event GoogleDialogflowCompanionAgent#skill_triggering_event}

---

### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

const googleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig: googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.guidanceInstructions">guidanceInstructions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>[]</code> | guidance_instructions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.overarchingGuidance">overarchingGuidance</a></code> | <code>string</code> | This is specific additional guidance that can be configured by the user. |

---

##### `guidanceInstructions`<sup>Optional</sup> <a name="guidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.guidanceInstructions"></a>

```typescript
public readonly guidanceInstructions: IResolvable | GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>[]

guidance_instructions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#guidance_instructions GoogleDialogflowCompanionAgent#guidance_instructions}

---

##### `overarchingGuidance`<sup>Optional</sup> <a name="overarchingGuidance" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.overarchingGuidance"></a>

```typescript
public readonly overarchingGuidance: string;
```

- *Type:* string

This is specific additional guidance that can be configured by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#overarching_guidance GoogleDialogflowCompanionAgent#overarching_guidance}

---

### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

const googleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions: googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.actions">actions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>[]</code> | actions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.condition">condition</a></code> | <code>string</code> | The condition of the instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.disableSuggestedReply">disableSuggestedReply</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable suggested reply generation for this instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayDetails">displayDetails</a></code> | <code>string</code> | The detailed description of this instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayName">displayName</a></code> | <code>string</code> | Display name for the instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.triggerEvent">triggerEvent</a></code> | <code>string</code> | Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.actions"></a>

```typescript
public readonly actions: IResolvable | GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>[]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#actions GoogleDialogflowCompanionAgent#actions}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

The condition of the instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#condition GoogleDialogflowCompanionAgent#condition}

---

##### `disableSuggestedReply`<sup>Optional</sup> <a name="disableSuggestedReply" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.disableSuggestedReply"></a>

```typescript
public readonly disableSuggestedReply: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable suggested reply generation for this instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#disable_suggested_reply GoogleDialogflowCompanionAgent#disable_suggested_reply}

---

##### `displayDetails`<sup>Optional</sup> <a name="displayDetails" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayDetails"></a>

```typescript
public readonly displayDetails: string;
```

- *Type:* string

The detailed description of this instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_details GoogleDialogflowCompanionAgent#display_details}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name for the instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_name GoogleDialogflowCompanionAgent#display_name}

---

##### `triggerEvent`<sup>Optional</sup> <a name="triggerEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.triggerEvent"></a>

```typescript
public readonly triggerEvent: string;
```

- *Type:* string

Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#trigger_event GoogleDialogflowCompanionAgent#trigger_event}

---

### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

const googleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions: googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.property.description">description</a></code> | <code>string</code> | Description of action item. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of action item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#description GoogleDialogflowCompanionAgent#description}

---

### GoogleDialogflowCompanionAgentTimeouts <a name="GoogleDialogflowCompanionAgentTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

const googleDialogflowCompanionAgentTimeouts: googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#create GoogleDialogflowCompanionAgent#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#delete GoogleDialogflowCompanionAgent#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#update GoogleDialogflowCompanionAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#create GoogleDialogflowCompanionAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#delete GoogleDialogflowCompanionAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#update GoogleDialogflowCompanionAgent#update}.

---

### GoogleDialogflowCompanionAgentToolsetTools <a name="GoogleDialogflowCompanionAgentToolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

const googleDialogflowCompanionAgentToolsetTools: googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.toolset">toolset</a></code> | <code>string</code> | The name of the toolset to retrieve the schema for. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.confirmationRequirement">confirmationRequirement</a></code> | <code>string</code> | Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.operationId">operationId</a></code> | <code>string</code> | The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.parameterOverrides">parameterOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>[]</code> | parameter_overrides block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.proactiveEnabled">proactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the toolset tool is enabled in proactive mode. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.reactiveEnabled">reactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the toolset tool is enabled in reactive mode. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

The name of the toolset to retrieve the schema for. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#toolset GoogleDialogflowCompanionAgent#toolset}

---

##### `confirmationRequirement`<sup>Optional</sup> <a name="confirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.confirmationRequirement"></a>

```typescript
public readonly confirmationRequirement: string;
```

- *Type:* string

Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#confirmation_requirement GoogleDialogflowCompanionAgent#confirmation_requirement}

---

##### `operationId`<sup>Optional</sup> <a name="operationId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#operation_id GoogleDialogflowCompanionAgent#operation_id}

---

##### `parameterOverrides`<sup>Optional</sup> <a name="parameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.parameterOverrides"></a>

```typescript
public readonly parameterOverrides: IResolvable | GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>[]

parameter_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_overrides GoogleDialogflowCompanionAgent#parameter_overrides}

---

##### `proactiveEnabled`<sup>Optional</sup> <a name="proactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.proactiveEnabled"></a>

```typescript
public readonly proactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the toolset tool is enabled in proactive mode.

NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the toolset tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#proactive_enabled GoogleDialogflowCompanionAgent#proactive_enabled}

---

##### `reactiveEnabled`<sup>Optional</sup> <a name="reactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.reactiveEnabled"></a>

```typescript
public readonly reactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the toolset tool is enabled in reactive mode.

NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the toolset tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#reactive_enabled GoogleDialogflowCompanionAgent#reactive_enabled}

---

### GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides <a name="GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

const googleDialogflowCompanionAgentToolsetToolsParameterOverrides: googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.contextReferenceKey">contextReferenceKey</a></code> | <code>string</code> | The key of the context reference in ingested context references. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.parameterName">parameterName</a></code> | <code>string</code> | The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.fieldPath">fieldPath</a></code> | <code>string</code> | The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it). |

---

##### `contextReferenceKey`<sup>Required</sup> <a name="contextReferenceKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.contextReferenceKey"></a>

```typescript
public readonly contextReferenceKey: string;
```

- *Type:* string

The key of the context reference in ingested context references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#context_reference_key GoogleDialogflowCompanionAgent#context_reference_key}

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_name GoogleDialogflowCompanionAgent#parameter_name}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#field_path GoogleDialogflowCompanionAgent#field_path}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCompanionAgentCesToolSpecsList <a name="GoogleDialogflowCompanionAgentCesToolSpecsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.get"></a>

```typescript
public get(index: number): GoogleDialogflowCompanionAgentCesToolSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCompanionAgentCesToolSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>[]

---


### GoogleDialogflowCompanionAgentCesToolSpecsOutputReference <a name="GoogleDialogflowCompanionAgentCesToolSpecsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides">putParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetCesTool">resetCesTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetConfirmationRequirement">resetConfirmationRequirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetParameterOverrides">resetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetProactiveEnabled">resetProactiveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetReactiveEnabled">resetReactiveEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameterOverrides` <a name="putParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides"></a>

```typescript
public putParameterOverrides(value: IResolvable | GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>[]

---

##### `resetCesTool` <a name="resetCesTool" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetCesTool"></a>

```typescript
public resetCesTool(): void
```

##### `resetConfirmationRequirement` <a name="resetConfirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetConfirmationRequirement"></a>

```typescript
public resetConfirmationRequirement(): void
```

##### `resetParameterOverrides` <a name="resetParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetParameterOverrides"></a>

```typescript
public resetParameterOverrides(): void
```

##### `resetProactiveEnabled` <a name="resetProactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetProactiveEnabled"></a>

```typescript
public resetProactiveEnabled(): void
```

##### `resetReactiveEnabled` <a name="resetReactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetReactiveEnabled"></a>

```typescript
public resetReactiveEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverrides">parameterOverrides</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesToolInput">cesToolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirementInput">confirmationRequirementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverridesInput">parameterOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabledInput">proactiveEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabledInput">reactiveEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesTool">cesTool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirement">confirmationRequirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabled">proactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabled">reactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterOverrides`<sup>Required</sup> <a name="parameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverrides"></a>

```typescript
public readonly parameterOverrides: GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList</a>

---

##### `cesToolInput`<sup>Optional</sup> <a name="cesToolInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesToolInput"></a>

```typescript
public readonly cesToolInput: string;
```

- *Type:* string

---

##### `confirmationRequirementInput`<sup>Optional</sup> <a name="confirmationRequirementInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirementInput"></a>

```typescript
public readonly confirmationRequirementInput: string;
```

- *Type:* string

---

##### `parameterOverridesInput`<sup>Optional</sup> <a name="parameterOverridesInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverridesInput"></a>

```typescript
public readonly parameterOverridesInput: IResolvable | GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>[]

---

##### `proactiveEnabledInput`<sup>Optional</sup> <a name="proactiveEnabledInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabledInput"></a>

```typescript
public readonly proactiveEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `reactiveEnabledInput`<sup>Optional</sup> <a name="reactiveEnabledInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabledInput"></a>

```typescript
public readonly reactiveEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cesTool`<sup>Required</sup> <a name="cesTool" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesTool"></a>

```typescript
public readonly cesTool: string;
```

- *Type:* string

---

##### `confirmationRequirement`<sup>Required</sup> <a name="confirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirement"></a>

```typescript
public readonly confirmationRequirement: string;
```

- *Type:* string

---

##### `proactiveEnabled`<sup>Required</sup> <a name="proactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabled"></a>

```typescript
public readonly proactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `reactiveEnabled`<sup>Required</sup> <a name="reactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabled"></a>

```typescript
public readonly reactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCompanionAgentCesToolSpecs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>

---


### GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList <a name="GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.get"></a>

```typescript
public get(index: number): GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>[]

---


### GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference <a name="GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resetFieldPath"></a>

```typescript
public resetFieldPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKeyInput">contextReferenceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKey">contextReferenceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contextReferenceKeyInput`<sup>Optional</sup> <a name="contextReferenceKeyInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKeyInput"></a>

```typescript
public readonly contextReferenceKeyInput: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `contextReferenceKey`<sup>Required</sup> <a name="contextReferenceKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKey"></a>

```typescript
public readonly contextReferenceKey: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get"></a>

```typescript
public get(index: number): GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>[]

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get"></a>

```typescript
public get(index: number): GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>[]

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisableSuggestedReply">resetDisableSuggestedReply</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayDetails">resetDisplayDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetTriggerEvent">resetTriggerEvent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions"></a>

```typescript
public putActions(value: IResolvable | GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>[]

---

##### `resetActions` <a name="resetActions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDisableSuggestedReply` <a name="resetDisableSuggestedReply" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisableSuggestedReply"></a>

```typescript
public resetDisableSuggestedReply(): void
```

##### `resetDisplayDetails` <a name="resetDisplayDetails" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayDetails"></a>

```typescript
public resetDisplayDetails(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetTriggerEvent` <a name="resetTriggerEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetTriggerEvent"></a>

```typescript
public resetTriggerEvent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReplyInput">disableSuggestedReplyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetailsInput">displayDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEventInput">triggerEventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReply">disableSuggestedReply</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetails">displayDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEvent">triggerEvent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actions"></a>

```typescript
public readonly actions: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>[]

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `disableSuggestedReplyInput`<sup>Optional</sup> <a name="disableSuggestedReplyInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReplyInput"></a>

```typescript
public readonly disableSuggestedReplyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayDetailsInput`<sup>Optional</sup> <a name="displayDetailsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetailsInput"></a>

```typescript
public readonly displayDetailsInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `triggerEventInput`<sup>Optional</sup> <a name="triggerEventInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEventInput"></a>

```typescript
public readonly triggerEventInput: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `disableSuggestedReply`<sup>Required</sup> <a name="disableSuggestedReply" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReply"></a>

```typescript
public readonly disableSuggestedReply: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayDetails`<sup>Required</sup> <a name="displayDetails" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetails"></a>

```typescript
public readonly displayDetails: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `triggerEvent`<sup>Required</sup> <a name="triggerEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEvent"></a>

```typescript
public readonly triggerEvent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions">putGuidanceInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetGuidanceInstructions">resetGuidanceInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetOverarchingGuidance">resetOverarchingGuidance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGuidanceInstructions` <a name="putGuidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions"></a>

```typescript
public putGuidanceInstructions(value: IResolvable | GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>[]

---

##### `resetGuidanceInstructions` <a name="resetGuidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetGuidanceInstructions"></a>

```typescript
public resetGuidanceInstructions(): void
```

##### `resetOverarchingGuidance` <a name="resetOverarchingGuidance" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetOverarchingGuidance"></a>

```typescript
public resetOverarchingGuidance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructions">guidanceInstructions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructionsInput">guidanceInstructionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidanceInput">overarchingGuidanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidance">overarchingGuidance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guidanceInstructions`<sup>Required</sup> <a name="guidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructions"></a>

```typescript
public readonly guidanceInstructions: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList</a>

---

##### `guidanceInstructionsInput`<sup>Optional</sup> <a name="guidanceInstructionsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructionsInput"></a>

```typescript
public readonly guidanceInstructionsInput: IResolvable | GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>[]

---

##### `overarchingGuidanceInput`<sup>Optional</sup> <a name="overarchingGuidanceInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidanceInput"></a>

```typescript
public readonly overarchingGuidanceInput: string;
```

- *Type:* string

---

##### `overarchingGuidance`<sup>Required</sup> <a name="overarchingGuidance" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidance"></a>

```typescript
public readonly overarchingGuidance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---


### GoogleDialogflowCompanionAgentSkillConfigsList <a name="GoogleDialogflowCompanionAgentSkillConfigsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.get"></a>

```typescript
public get(index: number): GoogleDialogflowCompanionAgentSkillConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCompanionAgentSkillConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>[]

---


### GoogleDialogflowCompanionAgentSkillConfigsOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig">putGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetGuidanceSkillConfig">resetGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetSkillTriggeringEvent">resetSkillTriggeringEvent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGuidanceSkillConfig` <a name="putGuidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig"></a>

```typescript
public putGuidanceSkillConfig(value: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---

##### `resetGuidanceSkillConfig` <a name="resetGuidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetGuidanceSkillConfig"></a>

```typescript
public resetGuidanceSkillConfig(): void
```

##### `resetSkillTriggeringEvent` <a name="resetSkillTriggeringEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetSkillTriggeringEvent"></a>

```typescript
public resetSkillTriggeringEvent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfig">guidanceSkillConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfigInput">guidanceSkillConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEventInput">skillTriggeringEventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEvent">skillTriggeringEvent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guidanceSkillConfig`<sup>Required</sup> <a name="guidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfig"></a>

```typescript
public readonly guidanceSkillConfig: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference</a>

---

##### `guidanceSkillConfigInput`<sup>Optional</sup> <a name="guidanceSkillConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfigInput"></a>

```typescript
public readonly guidanceSkillConfigInput: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---

##### `skillTriggeringEventInput`<sup>Optional</sup> <a name="skillTriggeringEventInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEventInput"></a>

```typescript
public readonly skillTriggeringEventInput: string;
```

- *Type:* string

---

##### `skillTriggeringEvent`<sup>Required</sup> <a name="skillTriggeringEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEvent"></a>

```typescript
public readonly skillTriggeringEvent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCompanionAgentSkillConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>

---


### GoogleDialogflowCompanionAgentTimeoutsOutputReference <a name="GoogleDialogflowCompanionAgentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCompanionAgentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a>

---


### GoogleDialogflowCompanionAgentToolsetToolsList <a name="GoogleDialogflowCompanionAgentToolsetToolsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.get"></a>

```typescript
public get(index: number): GoogleDialogflowCompanionAgentToolsetToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCompanionAgentToolsetTools[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>[]

---


### GoogleDialogflowCompanionAgentToolsetToolsOutputReference <a name="GoogleDialogflowCompanionAgentToolsetToolsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides">putParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetConfirmationRequirement">resetConfirmationRequirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetOperationId">resetOperationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetParameterOverrides">resetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetProactiveEnabled">resetProactiveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetReactiveEnabled">resetReactiveEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameterOverrides` <a name="putParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides"></a>

```typescript
public putParameterOverrides(value: IResolvable | GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>[]

---

##### `resetConfirmationRequirement` <a name="resetConfirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetConfirmationRequirement"></a>

```typescript
public resetConfirmationRequirement(): void
```

##### `resetOperationId` <a name="resetOperationId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetOperationId"></a>

```typescript
public resetOperationId(): void
```

##### `resetParameterOverrides` <a name="resetParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetParameterOverrides"></a>

```typescript
public resetParameterOverrides(): void
```

##### `resetProactiveEnabled` <a name="resetProactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetProactiveEnabled"></a>

```typescript
public resetProactiveEnabled(): void
```

##### `resetReactiveEnabled` <a name="resetReactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetReactiveEnabled"></a>

```typescript
public resetReactiveEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverrides">parameterOverrides</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList">GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirementInput">confirmationRequirementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationIdInput">operationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverridesInput">parameterOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabledInput">proactiveEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabledInput">reactiveEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirement">confirmationRequirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationId">operationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabled">proactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabled">reactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolset">toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterOverrides`<sup>Required</sup> <a name="parameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverrides"></a>

```typescript
public readonly parameterOverrides: GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList">GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList</a>

---

##### `confirmationRequirementInput`<sup>Optional</sup> <a name="confirmationRequirementInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirementInput"></a>

```typescript
public readonly confirmationRequirementInput: string;
```

- *Type:* string

---

##### `operationIdInput`<sup>Optional</sup> <a name="operationIdInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationIdInput"></a>

```typescript
public readonly operationIdInput: string;
```

- *Type:* string

---

##### `parameterOverridesInput`<sup>Optional</sup> <a name="parameterOverridesInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverridesInput"></a>

```typescript
public readonly parameterOverridesInput: IResolvable | GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>[]

---

##### `proactiveEnabledInput`<sup>Optional</sup> <a name="proactiveEnabledInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabledInput"></a>

```typescript
public readonly proactiveEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `reactiveEnabledInput`<sup>Optional</sup> <a name="reactiveEnabledInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabledInput"></a>

```typescript
public readonly reactiveEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolsetInput"></a>

```typescript
public readonly toolsetInput: string;
```

- *Type:* string

---

##### `confirmationRequirement`<sup>Required</sup> <a name="confirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirement"></a>

```typescript
public readonly confirmationRequirement: string;
```

- *Type:* string

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

---

##### `proactiveEnabled`<sup>Required</sup> <a name="proactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabled"></a>

```typescript
public readonly proactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `reactiveEnabled`<sup>Required</sup> <a name="reactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabled"></a>

```typescript
public readonly reactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCompanionAgentToolsetTools;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>

---


### GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList <a name="GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.get"></a>

```typescript
public get(index: number): GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>[]

---


### GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference <a name="GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCompanionAgent } from '@cdktn/provider-google-beta'

new googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resetFieldPath"></a>

```typescript
public resetFieldPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKeyInput">contextReferenceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKey">contextReferenceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contextReferenceKeyInput`<sup>Optional</sup> <a name="contextReferenceKeyInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKeyInput"></a>

```typescript
public readonly contextReferenceKeyInput: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `contextReferenceKey`<sup>Required</sup> <a name="contextReferenceKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKey"></a>

```typescript
public readonly contextReferenceKey: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>

---



