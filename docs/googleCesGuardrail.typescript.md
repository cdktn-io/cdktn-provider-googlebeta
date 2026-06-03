# `googleCesGuardrail` Submodule <a name="`googleCesGuardrail` Submodule" id="@cdktn/provider-google-beta.googleCesGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesGuardrail <a name="GoogleCesGuardrail" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail google_ces_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrail(scope: Construct, id: string, config: GoogleCesGuardrailConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig">GoogleCesGuardrailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig">GoogleCesGuardrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback">putCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter">putContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy">putLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity">putLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putModelSafety">putModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetCodeCallback">resetCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetContentFilter">resetContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPolicy">resetLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPromptSecurity">resetLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetModelSafety">resetModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction"></a>

```typescript
public putAction(value: GoogleCesGuardrailAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

---

##### `putCodeCallback` <a name="putCodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback"></a>

```typescript
public putCodeCallback(value: GoogleCesGuardrailCodeCallback): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

---

##### `putContentFilter` <a name="putContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter"></a>

```typescript
public putContentFilter(value: GoogleCesGuardrailContentFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

---

##### `putLlmPolicy` <a name="putLlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy"></a>

```typescript
public putLlmPolicy(value: GoogleCesGuardrailLlmPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

---

##### `putLlmPromptSecurity` <a name="putLlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity"></a>

```typescript
public putLlmPromptSecurity(value: GoogleCesGuardrailLlmPromptSecurity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

---

##### `putModelSafety` <a name="putModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putModelSafety"></a>

```typescript
public putModelSafety(value: GoogleCesGuardrailModelSafety): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putModelSafety.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCesGuardrailTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCodeCallback` <a name="resetCodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetCodeCallback"></a>

```typescript
public resetCodeCallback(): void
```

##### `resetContentFilter` <a name="resetContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetContentFilter"></a>

```typescript
public resetContentFilter(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLlmPolicy` <a name="resetLlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPolicy"></a>

```typescript
public resetLlmPolicy(): void
```

##### `resetLlmPromptSecurity` <a name="resetLlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPromptSecurity"></a>

```typescript
public resetLlmPromptSecurity(): void
```

##### `resetModelSafety` <a name="resetModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetModelSafety"></a>

```typescript
public resetModelSafety(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isConstruct"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

googleCesGuardrail.GoogleCesGuardrail.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformElement"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

googleCesGuardrail.GoogleCesGuardrail.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformResource"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

googleCesGuardrail.GoogleCesGuardrail.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleCesGuardrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCesGuardrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCesGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference">GoogleCesGuardrailActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallback">codeCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference">GoogleCesGuardrailCodeCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilter">contentFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference">GoogleCesGuardrailContentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicy">llmPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference">GoogleCesGuardrailLlmPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurity">llmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference">GoogleCesGuardrailLlmPromptSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafety">modelSafety</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference">GoogleCesGuardrailModelSafetyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference">GoogleCesGuardrailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.actionInput">actionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.appInput">appInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallbackInput">codeCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilterInput">contentFilterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailIdInput">guardrailIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicyInput">llmPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurityInput">llmPromptSecurityInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafetyInput">modelSafetyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.app">app</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailId">guardrailId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.action"></a>

```typescript
public readonly action: GoogleCesGuardrailActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference">GoogleCesGuardrailActionOutputReference</a>

---

##### `codeCallback`<sup>Required</sup> <a name="codeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallback"></a>

```typescript
public readonly codeCallback: GoogleCesGuardrailCodeCallbackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference">GoogleCesGuardrailCodeCallbackOutputReference</a>

---

##### `contentFilter`<sup>Required</sup> <a name="contentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilter"></a>

```typescript
public readonly contentFilter: GoogleCesGuardrailContentFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference">GoogleCesGuardrailContentFilterOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `llmPolicy`<sup>Required</sup> <a name="llmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicy"></a>

```typescript
public readonly llmPolicy: GoogleCesGuardrailLlmPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference">GoogleCesGuardrailLlmPolicyOutputReference</a>

---

##### `llmPromptSecurity`<sup>Required</sup> <a name="llmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurity"></a>

```typescript
public readonly llmPromptSecurity: GoogleCesGuardrailLlmPromptSecurityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference">GoogleCesGuardrailLlmPromptSecurityOutputReference</a>

---

##### `modelSafety`<sup>Required</sup> <a name="modelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafety"></a>

```typescript
public readonly modelSafety: GoogleCesGuardrailModelSafetyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference">GoogleCesGuardrailModelSafetyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCesGuardrailTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference">GoogleCesGuardrailTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.actionInput"></a>

```typescript
public readonly actionInput: GoogleCesGuardrailAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.appInput"></a>

```typescript
public readonly appInput: string;
```

- *Type:* string

---

##### `codeCallbackInput`<sup>Optional</sup> <a name="codeCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallbackInput"></a>

```typescript
public readonly codeCallbackInput: GoogleCesGuardrailCodeCallback;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

---

##### `contentFilterInput`<sup>Optional</sup> <a name="contentFilterInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilterInput"></a>

```typescript
public readonly contentFilterInput: GoogleCesGuardrailContentFilter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `guardrailIdInput`<sup>Optional</sup> <a name="guardrailIdInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailIdInput"></a>

```typescript
public readonly guardrailIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `llmPolicyInput`<sup>Optional</sup> <a name="llmPolicyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicyInput"></a>

```typescript
public readonly llmPolicyInput: GoogleCesGuardrailLlmPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

---

##### `llmPromptSecurityInput`<sup>Optional</sup> <a name="llmPromptSecurityInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurityInput"></a>

```typescript
public readonly llmPromptSecurityInput: GoogleCesGuardrailLlmPromptSecurity;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `modelSafetyInput`<sup>Optional</sup> <a name="modelSafetyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafetyInput"></a>

```typescript
public readonly modelSafetyInput: GoogleCesGuardrailModelSafety;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCesGuardrailTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `guardrailId`<sup>Required</sup> <a name="guardrailId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailId"></a>

```typescript
public readonly guardrailId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesGuardrailAction <a name="GoogleCesGuardrailAction" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailAction: googleCesGuardrail.GoogleCesGuardrailAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.generativeAnswer">generativeAnswer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a></code> | generative_answer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.respondImmediately">respondImmediately</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a></code> | respond_immediately block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.transferAgent">transferAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a></code> | transfer_agent block. |

---

##### `generativeAnswer`<sup>Optional</sup> <a name="generativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.generativeAnswer"></a>

```typescript
public readonly generativeAnswer: GoogleCesGuardrailActionGenerativeAnswer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

generative_answer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#generative_answer GoogleCesGuardrail#generative_answer}

---

##### `respondImmediately`<sup>Optional</sup> <a name="respondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.respondImmediately"></a>

```typescript
public readonly respondImmediately: GoogleCesGuardrailActionRespondImmediately;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

respond_immediately block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#respond_immediately GoogleCesGuardrail#respond_immediately}

---

##### `transferAgent`<sup>Optional</sup> <a name="transferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.transferAgent"></a>

```typescript
public readonly transferAgent: GoogleCesGuardrailActionTransferAgent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

transfer_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#transfer_agent GoogleCesGuardrail#transfer_agent}

---

### GoogleCesGuardrailActionGenerativeAnswer <a name="GoogleCesGuardrailActionGenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailActionGenerativeAnswer: googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer.property.prompt">prompt</a></code> | <code>string</code> | The prompt to use for the generative answer. |

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer.property.prompt"></a>

```typescript
public readonly prompt: string;
```

- *Type:* string

The prompt to use for the generative answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

### GoogleCesGuardrailActionRespondImmediately <a name="GoogleCesGuardrailActionRespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailActionRespondImmediately: googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately.property.responses">responses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>[]</code> | responses block. |

---

##### `responses`<sup>Required</sup> <a name="responses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately.property.responses"></a>

```typescript
public readonly responses: IResolvable | GoogleCesGuardrailActionRespondImmediatelyResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>[]

responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#responses GoogleCesGuardrail#responses}

---

### GoogleCesGuardrailActionRespondImmediatelyResponses <a name="GoogleCesGuardrailActionRespondImmediatelyResponses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailActionRespondImmediatelyResponses: googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.text">text</a></code> | <code>string</code> | Text for the agent to respond with. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the response is disabled. Disabled responses are not used by the agent. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Text for the agent to respond with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#text GoogleCesGuardrail#text}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the response is disabled. Disabled responses are not used by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailActionTransferAgent <a name="GoogleCesGuardrailActionTransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailActionTransferAgent: googleCesGuardrail.GoogleCesGuardrailActionTransferAgent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent.property.agent">agent</a></code> | <code>string</code> | The name of the agent to transfer the conversation to. |

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent.property.agent"></a>

```typescript
public readonly agent: string;
```

- *Type:* string

The name of the agent to transfer the conversation to.

The agent must be
in the same app as the current agent.
Format:
'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#agent GoogleCesGuardrail#agent}

---

### GoogleCesGuardrailCodeCallback <a name="GoogleCesGuardrailCodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailCodeCallback: googleCesGuardrail.GoogleCesGuardrailCodeCallback = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterAgentCallback">afterAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a></code> | after_agent_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterModelCallback">afterModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a></code> | after_model_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeAgentCallback">beforeAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a></code> | before_agent_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeModelCallback">beforeModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a></code> | before_model_callback block. |

---

##### `afterAgentCallback`<sup>Optional</sup> <a name="afterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterAgentCallback"></a>

```typescript
public readonly afterAgentCallback: GoogleCesGuardrailCodeCallbackAfterAgentCallback;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

after_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#after_agent_callback GoogleCesGuardrail#after_agent_callback}

---

##### `afterModelCallback`<sup>Optional</sup> <a name="afterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterModelCallback"></a>

```typescript
public readonly afterModelCallback: GoogleCesGuardrailCodeCallbackAfterModelCallback;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

after_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#after_model_callback GoogleCesGuardrail#after_model_callback}

---

##### `beforeAgentCallback`<sup>Optional</sup> <a name="beforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeAgentCallback"></a>

```typescript
public readonly beforeAgentCallback: GoogleCesGuardrailCodeCallbackBeforeAgentCallback;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

before_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#before_agent_callback GoogleCesGuardrail#before_agent_callback}

---

##### `beforeModelCallback`<sup>Optional</sup> <a name="beforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeModelCallback"></a>

```typescript
public readonly beforeModelCallback: GoogleCesGuardrailCodeCallbackBeforeModelCallback;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

before_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#before_model_callback GoogleCesGuardrail#before_model_callback}

---

### GoogleCesGuardrailCodeCallbackAfterAgentCallback <a name="GoogleCesGuardrailCodeCallbackAfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailCodeCallbackAfterAgentCallback: googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailCodeCallbackAfterModelCallback <a name="GoogleCesGuardrailCodeCallbackAfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailCodeCallbackAfterModelCallback: googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailCodeCallbackBeforeAgentCallback <a name="GoogleCesGuardrailCodeCallbackBeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailCodeCallbackBeforeAgentCallback: googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailCodeCallbackBeforeModelCallback <a name="GoogleCesGuardrailCodeCallbackBeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailCodeCallbackBeforeModelCallback: googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailConfig <a name="GoogleCesGuardrailConfig" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailConfig: googleCesGuardrail.GoogleCesGuardrailConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.app">app</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.guardrailId">guardrailId</a></code> | <code>string</code> | The ID to use for the guardrail, which will become the final component of the guardrail's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.codeCallback">codeCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | code_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.contentFilter">contentFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | content_filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.description">description</a></code> | <code>string</code> | Description of the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the guardrail is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#id GoogleCesGuardrail#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPolicy">llmPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | llm_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPromptSecurity">llmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | llm_prompt_security block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.modelSafety">modelSafety</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | model_safety block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#project GoogleCesGuardrail#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#app GoogleCesGuardrail#app}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#display_name GoogleCesGuardrail#display_name}

---

##### `guardrailId`<sup>Required</sup> <a name="guardrailId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.guardrailId"></a>

```typescript
public readonly guardrailId: string;
```

- *Type:* string

The ID to use for the guardrail, which will become the final component of the guardrail's resource name.

If not provided, a unique ID will be
automatically assigned for the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#guardrail_id GoogleCesGuardrail#guardrail_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#location GoogleCesGuardrail#location}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.action"></a>

```typescript
public readonly action: GoogleCesGuardrailAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#action GoogleCesGuardrail#action}

---

##### `codeCallback`<sup>Optional</sup> <a name="codeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.codeCallback"></a>

```typescript
public readonly codeCallback: GoogleCesGuardrailCodeCallback;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

code_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#code_callback GoogleCesGuardrail#code_callback}

---

##### `contentFilter`<sup>Optional</sup> <a name="contentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.contentFilter"></a>

```typescript
public readonly contentFilter: GoogleCesGuardrailContentFilter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

content_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#content_filter GoogleCesGuardrail#content_filter}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#deletion_policy GoogleCesGuardrail#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the guardrail is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#enabled GoogleCesGuardrail#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#id GoogleCesGuardrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `llmPolicy`<sup>Optional</sup> <a name="llmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPolicy"></a>

```typescript
public readonly llmPolicy: GoogleCesGuardrailLlmPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

llm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#llm_policy GoogleCesGuardrail#llm_policy}

---

##### `llmPromptSecurity`<sup>Optional</sup> <a name="llmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPromptSecurity"></a>

```typescript
public readonly llmPromptSecurity: GoogleCesGuardrailLlmPromptSecurity;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

llm_prompt_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#llm_prompt_security GoogleCesGuardrail#llm_prompt_security}

---

##### `modelSafety`<sup>Optional</sup> <a name="modelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.modelSafety"></a>

```typescript
public readonly modelSafety: GoogleCesGuardrailModelSafety;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

model_safety block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#model_safety GoogleCesGuardrail#model_safety}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#project GoogleCesGuardrail#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCesGuardrailTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#timeouts GoogleCesGuardrail#timeouts}

---

### GoogleCesGuardrailContentFilter <a name="GoogleCesGuardrailContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailContentFilter: googleCesGuardrail.GoogleCesGuardrailContentFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.matchType">matchType</a></code> | <code>string</code> | Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContents">bannedContents</a></code> | <code>string[]</code> | List of banned phrases. Applies to both user inputs and agent responses. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInAgentResponse">bannedContentsInAgentResponse</a></code> | <code>string[]</code> | List of banned phrases. Applies only to agent responses. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInUserInput">bannedContentsInUserInput</a></code> | <code>string[]</code> | List of banned phrases. Applies only to user inputs. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.disregardDiacritics">disregardDiacritics</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, diacritics are ignored during matching. |

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#match_type GoogleCesGuardrail#match_type}

---

##### `bannedContents`<sup>Optional</sup> <a name="bannedContents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContents"></a>

```typescript
public readonly bannedContents: string[];
```

- *Type:* string[]

List of banned phrases. Applies to both user inputs and agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#banned_contents GoogleCesGuardrail#banned_contents}

---

##### `bannedContentsInAgentResponse`<sup>Optional</sup> <a name="bannedContentsInAgentResponse" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInAgentResponse"></a>

```typescript
public readonly bannedContentsInAgentResponse: string[];
```

- *Type:* string[]

List of banned phrases. Applies only to agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#banned_contents_in_agent_response GoogleCesGuardrail#banned_contents_in_agent_response}

---

##### `bannedContentsInUserInput`<sup>Optional</sup> <a name="bannedContentsInUserInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInUserInput"></a>

```typescript
public readonly bannedContentsInUserInput: string[];
```

- *Type:* string[]

List of banned phrases. Applies only to user inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#banned_contents_in_user_input GoogleCesGuardrail#banned_contents_in_user_input}

---

##### `disregardDiacritics`<sup>Optional</sup> <a name="disregardDiacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.disregardDiacritics"></a>

```typescript
public readonly disregardDiacritics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, diacritics are ignored during matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#disregard_diacritics GoogleCesGuardrail#disregard_diacritics}

---

### GoogleCesGuardrailLlmPolicy <a name="GoogleCesGuardrailLlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailLlmPolicy: googleCesGuardrail.GoogleCesGuardrailLlmPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.policyScope">policyScope</a></code> | <code>string</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.prompt">prompt</a></code> | <code>string</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.allowShortUtterance">allowShortUtterance</a></code> | <code>boolean \| cdktn.IResolvable</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.failOpen">failOpen</a></code> | <code>boolean \| cdktn.IResolvable</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.maxConversationMessages">maxConversationMessages</a></code> | <code>number</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a></code> | model_settings block. |

---

##### `policyScope`<sup>Required</sup> <a name="policyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.policyScope"></a>

```typescript
public readonly policyScope: string;
```

- *Type:* string

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE Possible values: ["USER_QUERY", "AGENT_RESPONSE", "USER_QUERY_AND_AGENT_RESPONSE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#policy_scope GoogleCesGuardrail#policy_scope}

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.prompt"></a>

```typescript
public readonly prompt: string;
```

- *Type:* string

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

##### `allowShortUtterance`<sup>Optional</sup> <a name="allowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.allowShortUtterance"></a>

```typescript
public readonly allowShortUtterance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#allow_short_utterance GoogleCesGuardrail#allow_short_utterance}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

##### `maxConversationMessages`<sup>Optional</sup> <a name="maxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.maxConversationMessages"></a>

```typescript
public readonly maxConversationMessages: number;
```

- *Type:* number

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#max_conversation_messages GoogleCesGuardrail#max_conversation_messages}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.modelSettings"></a>

```typescript
public readonly modelSettings: GoogleCesGuardrailLlmPolicyModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#model_settings GoogleCesGuardrail#model_settings}

---

### GoogleCesGuardrailLlmPolicyModelSettings <a name="GoogleCesGuardrailLlmPolicyModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailLlmPolicyModelSettings: googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.model">model</a></code> | <code>string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.temperature">temperature</a></code> | <code>number</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#model GoogleCesGuardrail#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#temperature GoogleCesGuardrail#temperature}

---

### GoogleCesGuardrailLlmPromptSecurity <a name="GoogleCesGuardrailLlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailLlmPromptSecurity: googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.customPolicy">customPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.defaultSettings">defaultSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a></code> | default_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.failOpen">failOpen</a></code> | <code>boolean \| cdktn.IResolvable</code> | Determines the behavior when the guardrail encounters an LLM error. |

---

##### `customPolicy`<sup>Optional</sup> <a name="customPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.customPolicy"></a>

```typescript
public readonly customPolicy: GoogleCesGuardrailLlmPromptSecurityCustomPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#custom_policy GoogleCesGuardrail#custom_policy}

---

##### `defaultSettings`<sup>Optional</sup> <a name="defaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.defaultSettings"></a>

```typescript
public readonly defaultSettings: GoogleCesGuardrailLlmPromptSecurityDefaultSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

default_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#default_settings GoogleCesGuardrail#default_settings}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Determines the behavior when the guardrail encounters an LLM error.

If true: the guardrail is bypassed.
- If false (default): the guardrail triggers/blocks.
Note: If a custom policy is provided, this field is ignored in favor of
the policy's 'failOpen' configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

### GoogleCesGuardrailLlmPromptSecurityCustomPolicy <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailLlmPromptSecurityCustomPolicy: googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope">policyScope</a></code> | <code>string</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.prompt">prompt</a></code> | <code>string</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance">allowShortUtterance</a></code> | <code>boolean \| cdktn.IResolvable</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen">failOpen</a></code> | <code>boolean \| cdktn.IResolvable</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages">maxConversationMessages</a></code> | <code>number</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | model_settings block. |

---

##### `policyScope`<sup>Required</sup> <a name="policyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope"></a>

```typescript
public readonly policyScope: string;
```

- *Type:* string

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#policy_scope GoogleCesGuardrail#policy_scope}

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.prompt"></a>

```typescript
public readonly prompt: string;
```

- *Type:* string

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

##### `allowShortUtterance`<sup>Optional</sup> <a name="allowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance"></a>

```typescript
public readonly allowShortUtterance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#allow_short_utterance GoogleCesGuardrail#allow_short_utterance}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

##### `maxConversationMessages`<sup>Optional</sup> <a name="maxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages"></a>

```typescript
public readonly maxConversationMessages: number;
```

- *Type:* number

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#max_conversation_messages GoogleCesGuardrail#max_conversation_messages}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings"></a>

```typescript
public readonly modelSettings: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#model_settings GoogleCesGuardrail#model_settings}

---

### GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings: googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model">model</a></code> | <code>string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature">temperature</a></code> | <code>number</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#model GoogleCesGuardrail#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#temperature GoogleCesGuardrail#temperature}

---

### GoogleCesGuardrailLlmPromptSecurityDefaultSettings <a name="GoogleCesGuardrailLlmPromptSecurityDefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailLlmPromptSecurityDefaultSettings: googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings = { ... }
```


### GoogleCesGuardrailModelSafety <a name="GoogleCesGuardrailModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailModelSafety: googleCesGuardrail.GoogleCesGuardrailModelSafety = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety.property.safetySettings">safetySettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>[]</code> | safety_settings block. |

---

##### `safetySettings`<sup>Required</sup> <a name="safetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety.property.safetySettings"></a>

```typescript
public readonly safetySettings: IResolvable | GoogleCesGuardrailModelSafetySafetySettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>[]

safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#safety_settings GoogleCesGuardrail#safety_settings}

---

### GoogleCesGuardrailModelSafetySafetySettings <a name="GoogleCesGuardrailModelSafetySafetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailModelSafetySafetySettings: googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.category">category</a></code> | <code>string</code> | The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.threshold">threshold</a></code> | <code>string</code> | The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"]. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#category GoogleCesGuardrail#category}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#threshold GoogleCesGuardrail#threshold}

---

### GoogleCesGuardrailTimeouts <a name="GoogleCesGuardrailTimeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

const googleCesGuardrailTimeouts: googleCesGuardrail.GoogleCesGuardrailTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#create GoogleCesGuardrail#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#delete GoogleCesGuardrail#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#update GoogleCesGuardrail#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#create GoogleCesGuardrail#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#delete GoogleCesGuardrail#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#update GoogleCesGuardrail#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesGuardrailActionGenerativeAnswerOutputReference <a name="GoogleCesGuardrailActionGenerativeAnswerOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.promptInput">promptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.prompt">prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.promptInput"></a>

```typescript
public readonly promptInput: string;
```

- *Type:* string

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.prompt"></a>

```typescript
public readonly prompt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailActionGenerativeAnswer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

---


### GoogleCesGuardrailActionOutputReference <a name="GoogleCesGuardrailActionOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putGenerativeAnswer">putGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putRespondImmediately">putRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putTransferAgent">putTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetGenerativeAnswer">resetGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetRespondImmediately">resetRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetTransferAgent">resetTransferAgent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGenerativeAnswer` <a name="putGenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putGenerativeAnswer"></a>

```typescript
public putGenerativeAnswer(value: GoogleCesGuardrailActionGenerativeAnswer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putGenerativeAnswer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

---

##### `putRespondImmediately` <a name="putRespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putRespondImmediately"></a>

```typescript
public putRespondImmediately(value: GoogleCesGuardrailActionRespondImmediately): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putRespondImmediately.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

---

##### `putTransferAgent` <a name="putTransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putTransferAgent"></a>

```typescript
public putTransferAgent(value: GoogleCesGuardrailActionTransferAgent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putTransferAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

---

##### `resetGenerativeAnswer` <a name="resetGenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetGenerativeAnswer"></a>

```typescript
public resetGenerativeAnswer(): void
```

##### `resetRespondImmediately` <a name="resetRespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetRespondImmediately"></a>

```typescript
public resetRespondImmediately(): void
```

##### `resetTransferAgent` <a name="resetTransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetTransferAgent"></a>

```typescript
public resetTransferAgent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswer">generativeAnswer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference">GoogleCesGuardrailActionGenerativeAnswerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediately">respondImmediately</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference">GoogleCesGuardrailActionRespondImmediatelyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgent">transferAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference">GoogleCesGuardrailActionTransferAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswerInput">generativeAnswerInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediatelyInput">respondImmediatelyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgentInput">transferAgentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generativeAnswer`<sup>Required</sup> <a name="generativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswer"></a>

```typescript
public readonly generativeAnswer: GoogleCesGuardrailActionGenerativeAnswerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference">GoogleCesGuardrailActionGenerativeAnswerOutputReference</a>

---

##### `respondImmediately`<sup>Required</sup> <a name="respondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediately"></a>

```typescript
public readonly respondImmediately: GoogleCesGuardrailActionRespondImmediatelyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference">GoogleCesGuardrailActionRespondImmediatelyOutputReference</a>

---

##### `transferAgent`<sup>Required</sup> <a name="transferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgent"></a>

```typescript
public readonly transferAgent: GoogleCesGuardrailActionTransferAgentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference">GoogleCesGuardrailActionTransferAgentOutputReference</a>

---

##### `generativeAnswerInput`<sup>Optional</sup> <a name="generativeAnswerInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswerInput"></a>

```typescript
public readonly generativeAnswerInput: GoogleCesGuardrailActionGenerativeAnswer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

---

##### `respondImmediatelyInput`<sup>Optional</sup> <a name="respondImmediatelyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediatelyInput"></a>

```typescript
public readonly respondImmediatelyInput: GoogleCesGuardrailActionRespondImmediately;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

---

##### `transferAgentInput`<sup>Optional</sup> <a name="transferAgentInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgentInput"></a>

```typescript
public readonly transferAgentInput: GoogleCesGuardrailActionTransferAgent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

---


### GoogleCesGuardrailActionRespondImmediatelyOutputReference <a name="GoogleCesGuardrailActionRespondImmediatelyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.putResponses">putResponses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResponses` <a name="putResponses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.putResponses"></a>

```typescript
public putResponses(value: IResolvable | GoogleCesGuardrailActionRespondImmediatelyResponses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.putResponses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responses">responses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList">GoogleCesGuardrailActionRespondImmediatelyResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput">responsesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `responses`<sup>Required</sup> <a name="responses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responses"></a>

```typescript
public readonly responses: GoogleCesGuardrailActionRespondImmediatelyResponsesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList">GoogleCesGuardrailActionRespondImmediatelyResponsesList</a>

---

##### `responsesInput`<sup>Optional</sup> <a name="responsesInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput"></a>

```typescript
public readonly responsesInput: IResolvable | GoogleCesGuardrailActionRespondImmediatelyResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailActionRespondImmediately;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

---


### GoogleCesGuardrailActionRespondImmediatelyResponsesList <a name="GoogleCesGuardrailActionRespondImmediatelyResponsesList" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.get"></a>

```typescript
public get(index: number): GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesGuardrailActionRespondImmediatelyResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>[]

---


### GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference <a name="GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesGuardrailActionRespondImmediatelyResponses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>

---


### GoogleCesGuardrailActionTransferAgentOutputReference <a name="GoogleCesGuardrailActionTransferAgentOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agentInput">agentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agent">agent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agentInput"></a>

```typescript
public readonly agentInput: string;
```

- *Type:* string

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agent"></a>

```typescript
public readonly agent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailActionTransferAgent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

---


### GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailCodeCallbackAfterAgentCallback;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

---


### GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailCodeCallbackAfterModelCallback;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

---


### GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailCodeCallbackBeforeAgentCallback;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

---


### GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailCodeCallbackBeforeModelCallback;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

---


### GoogleCesGuardrailCodeCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback">putAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback">putAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback">putBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback">putBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback">resetAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterModelCallback">resetAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback">resetBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback">resetBeforeModelCallback</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAfterAgentCallback` <a name="putAfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback"></a>

```typescript
public putAfterAgentCallback(value: GoogleCesGuardrailCodeCallbackAfterAgentCallback): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `putAfterModelCallback` <a name="putAfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback"></a>

```typescript
public putAfterModelCallback(value: GoogleCesGuardrailCodeCallbackAfterModelCallback): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `putBeforeAgentCallback` <a name="putBeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback"></a>

```typescript
public putBeforeAgentCallback(value: GoogleCesGuardrailCodeCallbackBeforeAgentCallback): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `putBeforeModelCallback` <a name="putBeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback"></a>

```typescript
public putBeforeModelCallback(value: GoogleCesGuardrailCodeCallbackBeforeModelCallback): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `resetAfterAgentCallback` <a name="resetAfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback"></a>

```typescript
public resetAfterAgentCallback(): void
```

##### `resetAfterModelCallback` <a name="resetAfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterModelCallback"></a>

```typescript
public resetAfterModelCallback(): void
```

##### `resetBeforeAgentCallback` <a name="resetBeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback"></a>

```typescript
public resetBeforeAgentCallback(): void
```

##### `resetBeforeModelCallback` <a name="resetBeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback"></a>

```typescript
public resetBeforeModelCallback(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallback">afterAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallback">afterModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback">beforeAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallback">beforeModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput">afterAgentCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput">afterModelCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput">beforeAgentCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput">beforeModelCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `afterAgentCallback`<sup>Required</sup> <a name="afterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallback"></a>

```typescript
public readonly afterAgentCallback: GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a>

---

##### `afterModelCallback`<sup>Required</sup> <a name="afterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallback"></a>

```typescript
public readonly afterModelCallback: GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference</a>

---

##### `beforeAgentCallback`<sup>Required</sup> <a name="beforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback"></a>

```typescript
public readonly beforeAgentCallback: GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a>

---

##### `beforeModelCallback`<sup>Required</sup> <a name="beforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallback"></a>

```typescript
public readonly beforeModelCallback: GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a>

---

##### `afterAgentCallbackInput`<sup>Optional</sup> <a name="afterAgentCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput"></a>

```typescript
public readonly afterAgentCallbackInput: GoogleCesGuardrailCodeCallbackAfterAgentCallback;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `afterModelCallbackInput`<sup>Optional</sup> <a name="afterModelCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput"></a>

```typescript
public readonly afterModelCallbackInput: GoogleCesGuardrailCodeCallbackAfterModelCallback;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `beforeAgentCallbackInput`<sup>Optional</sup> <a name="beforeAgentCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput"></a>

```typescript
public readonly beforeAgentCallbackInput: GoogleCesGuardrailCodeCallbackBeforeAgentCallback;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `beforeModelCallbackInput`<sup>Optional</sup> <a name="beforeModelCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput"></a>

```typescript
public readonly beforeModelCallbackInput: GoogleCesGuardrailCodeCallbackBeforeModelCallback;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailCodeCallback;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

---


### GoogleCesGuardrailContentFilterOutputReference <a name="GoogleCesGuardrailContentFilterOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContents">resetBannedContents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse">resetBannedContentsInAgentResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput">resetBannedContentsInUserInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetDisregardDiacritics">resetDisregardDiacritics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBannedContents` <a name="resetBannedContents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContents"></a>

```typescript
public resetBannedContents(): void
```

##### `resetBannedContentsInAgentResponse` <a name="resetBannedContentsInAgentResponse" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse"></a>

```typescript
public resetBannedContentsInAgentResponse(): void
```

##### `resetBannedContentsInUserInput` <a name="resetBannedContentsInUserInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput"></a>

```typescript
public resetBannedContentsInUserInput(): void
```

##### `resetDisregardDiacritics` <a name="resetDisregardDiacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetDisregardDiacritics"></a>

```typescript
public resetDisregardDiacritics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput">bannedContentsInAgentResponseInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInput">bannedContentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput">bannedContentsInUserInputInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput">disregardDiacriticsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchTypeInput">matchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContents">bannedContents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse">bannedContentsInAgentResponse</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput">bannedContentsInUserInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacritics">disregardDiacritics</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchType">matchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bannedContentsInAgentResponseInput`<sup>Optional</sup> <a name="bannedContentsInAgentResponseInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput"></a>

```typescript
public readonly bannedContentsInAgentResponseInput: string[];
```

- *Type:* string[]

---

##### `bannedContentsInput`<sup>Optional</sup> <a name="bannedContentsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInput"></a>

```typescript
public readonly bannedContentsInput: string[];
```

- *Type:* string[]

---

##### `bannedContentsInUserInputInput`<sup>Optional</sup> <a name="bannedContentsInUserInputInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput"></a>

```typescript
public readonly bannedContentsInUserInputInput: string[];
```

- *Type:* string[]

---

##### `disregardDiacriticsInput`<sup>Optional</sup> <a name="disregardDiacriticsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput"></a>

```typescript
public readonly disregardDiacriticsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchTypeInput"></a>

```typescript
public readonly matchTypeInput: string;
```

- *Type:* string

---

##### `bannedContents`<sup>Required</sup> <a name="bannedContents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContents"></a>

```typescript
public readonly bannedContents: string[];
```

- *Type:* string[]

---

##### `bannedContentsInAgentResponse`<sup>Required</sup> <a name="bannedContentsInAgentResponse" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse"></a>

```typescript
public readonly bannedContentsInAgentResponse: string[];
```

- *Type:* string[]

---

##### `bannedContentsInUserInput`<sup>Required</sup> <a name="bannedContentsInUserInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput"></a>

```typescript
public readonly bannedContentsInUserInput: string[];
```

- *Type:* string[]

---

##### `disregardDiacritics`<sup>Required</sup> <a name="disregardDiacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacritics"></a>

```typescript
public readonly disregardDiacritics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailContentFilter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

---


### GoogleCesGuardrailLlmPolicyModelSettingsOutputReference <a name="GoogleCesGuardrailLlmPolicyModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature"></a>

```typescript
public resetTemperature(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```typescript
public readonly temperatureInput: number;
```

- *Type:* number

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailLlmPolicyModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

---


### GoogleCesGuardrailLlmPolicyOutputReference <a name="GoogleCesGuardrailLlmPolicyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings">putModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance">resetAllowShortUtterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages">resetMaxConversationMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetModelSettings">resetModelSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModelSettings` <a name="putModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings"></a>

```typescript
public putModelSettings(value: GoogleCesGuardrailLlmPolicyModelSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

---

##### `resetAllowShortUtterance` <a name="resetAllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance"></a>

```typescript
public resetAllowShortUtterance(): void
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetFailOpen"></a>

```typescript
public resetFailOpen(): void
```

##### `resetMaxConversationMessages` <a name="resetMaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages"></a>

```typescript
public resetMaxConversationMessages(): void
```

##### `resetModelSettings` <a name="resetModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetModelSettings"></a>

```typescript
public resetModelSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput">allowShortUtteranceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput">maxConversationMessagesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettingsInput">modelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScopeInput">policyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.promptInput">promptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtterance">allowShortUtterance</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpen">failOpen</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessages">maxConversationMessages</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScope">policyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.prompt">prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettings"></a>

```typescript
public readonly modelSettings: GoogleCesGuardrailLlmPolicyModelSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPolicyModelSettingsOutputReference</a>

---

##### `allowShortUtteranceInput`<sup>Optional</sup> <a name="allowShortUtteranceInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput"></a>

```typescript
public readonly allowShortUtteranceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpenInput"></a>

```typescript
public readonly failOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxConversationMessagesInput`<sup>Optional</sup> <a name="maxConversationMessagesInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput"></a>

```typescript
public readonly maxConversationMessagesInput: number;
```

- *Type:* number

---

##### `modelSettingsInput`<sup>Optional</sup> <a name="modelSettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettingsInput"></a>

```typescript
public readonly modelSettingsInput: GoogleCesGuardrailLlmPolicyModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

---

##### `policyScopeInput`<sup>Optional</sup> <a name="policyScopeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScopeInput"></a>

```typescript
public readonly policyScopeInput: string;
```

- *Type:* string

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.promptInput"></a>

```typescript
public readonly promptInput: string;
```

- *Type:* string

---

##### `allowShortUtterance`<sup>Required</sup> <a name="allowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtterance"></a>

```typescript
public readonly allowShortUtterance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxConversationMessages`<sup>Required</sup> <a name="maxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessages"></a>

```typescript
public readonly maxConversationMessages: number;
```

- *Type:* number

---

##### `policyScope`<sup>Required</sup> <a name="policyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScope"></a>

```typescript
public readonly policyScope: string;
```

- *Type:* string

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.prompt"></a>

```typescript
public readonly prompt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailLlmPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

---


### GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature"></a>

```typescript
public resetTemperature(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```typescript
public readonly temperatureInput: number;
```

- *Type:* number

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---


### GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings">putModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance">resetAllowShortUtterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages">resetMaxConversationMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings">resetModelSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModelSettings` <a name="putModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings"></a>

```typescript
public putModelSettings(value: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `resetAllowShortUtterance` <a name="resetAllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance"></a>

```typescript
public resetAllowShortUtterance(): void
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen"></a>

```typescript
public resetFailOpen(): void
```

##### `resetMaxConversationMessages` <a name="resetMaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages"></a>

```typescript
public resetMaxConversationMessages(): void
```

##### `resetModelSettings` <a name="resetModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings"></a>

```typescript
public resetModelSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput">allowShortUtteranceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput">maxConversationMessagesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput">modelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput">policyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput">promptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance">allowShortUtterance</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen">failOpen</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages">maxConversationMessages</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope">policyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt">prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings"></a>

```typescript
public readonly modelSettings: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a>

---

##### `allowShortUtteranceInput`<sup>Optional</sup> <a name="allowShortUtteranceInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput"></a>

```typescript
public readonly allowShortUtteranceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput"></a>

```typescript
public readonly failOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxConversationMessagesInput`<sup>Optional</sup> <a name="maxConversationMessagesInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput"></a>

```typescript
public readonly maxConversationMessagesInput: number;
```

- *Type:* number

---

##### `modelSettingsInput`<sup>Optional</sup> <a name="modelSettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput"></a>

```typescript
public readonly modelSettingsInput: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `policyScopeInput`<sup>Optional</sup> <a name="policyScopeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput"></a>

```typescript
public readonly policyScopeInput: string;
```

- *Type:* string

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput"></a>

```typescript
public readonly promptInput: string;
```

- *Type:* string

---

##### `allowShortUtterance`<sup>Required</sup> <a name="allowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance"></a>

```typescript
public readonly allowShortUtterance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxConversationMessages`<sup>Required</sup> <a name="maxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages"></a>

```typescript
public readonly maxConversationMessages: number;
```

- *Type:* number

---

##### `policyScope`<sup>Required</sup> <a name="policyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope"></a>

```typescript
public readonly policyScope: string;
```

- *Type:* string

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt"></a>

```typescript
public readonly prompt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailLlmPromptSecurityCustomPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

---


### GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate">defaultPromptTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultPromptTemplate`<sup>Required</sup> <a name="defaultPromptTemplate" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate"></a>

```typescript
public readonly defaultPromptTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailLlmPromptSecurityDefaultSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

---


### GoogleCesGuardrailLlmPromptSecurityOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy">putCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings">putDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy">resetCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings">resetDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomPolicy` <a name="putCustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy"></a>

```typescript
public putCustomPolicy(value: GoogleCesGuardrailLlmPromptSecurityCustomPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `putDefaultSettings` <a name="putDefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings"></a>

```typescript
public putDefaultSettings(value: GoogleCesGuardrailLlmPromptSecurityDefaultSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `resetCustomPolicy` <a name="resetCustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy"></a>

```typescript
public resetCustomPolicy(): void
```

##### `resetDefaultSettings` <a name="resetDefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings"></a>

```typescript
public resetDefaultSettings(): void
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetFailOpen"></a>

```typescript
public resetFailOpen(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicy">customPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings">defaultSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput">customPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput">defaultSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpen">failOpen</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customPolicy`<sup>Required</sup> <a name="customPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicy"></a>

```typescript
public readonly customPolicy: GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a>

---

##### `defaultSettings`<sup>Required</sup> <a name="defaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings"></a>

```typescript
public readonly defaultSettings: GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a>

---

##### `customPolicyInput`<sup>Optional</sup> <a name="customPolicyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput"></a>

```typescript
public readonly customPolicyInput: GoogleCesGuardrailLlmPromptSecurityCustomPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `defaultSettingsInput`<sup>Optional</sup> <a name="defaultSettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput"></a>

```typescript
public readonly defaultSettingsInput: GoogleCesGuardrailLlmPromptSecurityDefaultSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput"></a>

```typescript
public readonly failOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailLlmPromptSecurity;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

---


### GoogleCesGuardrailModelSafetyOutputReference <a name="GoogleCesGuardrailModelSafetyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.putSafetySettings">putSafetySettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSafetySettings` <a name="putSafetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.putSafetySettings"></a>

```typescript
public putSafetySettings(value: IResolvable | GoogleCesGuardrailModelSafetySafetySettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.putSafetySettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettings">safetySettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList">GoogleCesGuardrailModelSafetySafetySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettingsInput">safetySettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `safetySettings`<sup>Required</sup> <a name="safetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettings"></a>

```typescript
public readonly safetySettings: GoogleCesGuardrailModelSafetySafetySettingsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList">GoogleCesGuardrailModelSafetySafetySettingsList</a>

---

##### `safetySettingsInput`<sup>Optional</sup> <a name="safetySettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettingsInput"></a>

```typescript
public readonly safetySettingsInput: IResolvable | GoogleCesGuardrailModelSafetySafetySettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesGuardrailModelSafety;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

---


### GoogleCesGuardrailModelSafetySafetySettingsList <a name="GoogleCesGuardrailModelSafetySafetySettingsList" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.get"></a>

```typescript
public get(index: number): GoogleCesGuardrailModelSafetySafetySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesGuardrailModelSafetySafetySettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>[]

---


### GoogleCesGuardrailModelSafetySafetySettingsOutputReference <a name="GoogleCesGuardrailModelSafetySafetySettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesGuardrailModelSafetySafetySettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>

---


### GoogleCesGuardrailTimeoutsOutputReference <a name="GoogleCesGuardrailTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCesGuardrail } from '@cdktn/provider-google-beta'

new googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesGuardrailTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

---



