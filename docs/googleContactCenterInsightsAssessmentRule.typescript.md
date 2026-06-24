# `googleContactCenterInsightsAssessmentRule` Submodule <a name="`googleContactCenterInsightsAssessmentRule` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsAssessmentRule <a name="GoogleContactCenterInsightsAssessmentRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule google_contact_center_insights_assessment_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer"></a>

```typescript
import { googleContactCenterInsightsAssessmentRule } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule(scope: Construct, id: string, config: GoogleContactCenterInsightsAssessmentRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig">GoogleContactCenterInsightsAssessmentRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig">GoogleContactCenterInsightsAssessmentRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putSampleRule">putSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putScheduleInfo">putScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetAssessmentRuleId">resetAssessmentRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetSampleRule">resetSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetScheduleInfo">resetScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSampleRule` <a name="putSampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putSampleRule"></a>

```typescript
public putSampleRule(value: GoogleContactCenterInsightsAssessmentRuleSampleRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putSampleRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a>

---

##### `putScheduleInfo` <a name="putScheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putScheduleInfo"></a>

```typescript
public putScheduleInfo(value: GoogleContactCenterInsightsAssessmentRuleScheduleInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putScheduleInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleContactCenterInsightsAssessmentRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetAssessmentRuleId` <a name="resetAssessmentRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetAssessmentRuleId"></a>

```typescript
public resetAssessmentRuleId(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSampleRule` <a name="resetSampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetSampleRule"></a>

```typescript
public resetSampleRule(): void
```

##### `resetScheduleInfo` <a name="resetScheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetScheduleInfo"></a>

```typescript
public resetScheduleInfo(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsAssessmentRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isConstruct"></a>

```typescript
import { googleContactCenterInsightsAssessmentRule } from '@cdktn/provider-google-beta'

googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformElement"></a>

```typescript
import { googleContactCenterInsightsAssessmentRule } from '@cdktn/provider-google-beta'

googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformResource"></a>

```typescript
import { googleContactCenterInsightsAssessmentRule } from '@cdktn/provider-google-beta'

googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport"></a>

```typescript
import { googleContactCenterInsightsAssessmentRule } from '@cdktn/provider-google-beta'

googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleContactCenterInsightsAssessmentRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContactCenterInsightsAssessmentRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContactCenterInsightsAssessmentRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsAssessmentRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.sampleRule">sampleRule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference">GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.scheduleInfo">scheduleInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference">GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference">GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.activeInput">activeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.assessmentRuleIdInput">assessmentRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.sampleRuleInput">sampleRuleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.scheduleInfoInput">scheduleInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.assessmentRuleId">assessmentRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sampleRule`<sup>Required</sup> <a name="sampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.sampleRule"></a>

```typescript
public readonly sampleRule: GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference">GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference</a>

---

##### `scheduleInfo`<sup>Required</sup> <a name="scheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.scheduleInfo"></a>

```typescript
public readonly scheduleInfo: GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference">GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference">GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `assessmentRuleIdInput`<sup>Optional</sup> <a name="assessmentRuleIdInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.assessmentRuleIdInput"></a>

```typescript
public readonly assessmentRuleIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sampleRuleInput`<sup>Optional</sup> <a name="sampleRuleInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.sampleRuleInput"></a>

```typescript
public readonly sampleRuleInput: GoogleContactCenterInsightsAssessmentRuleSampleRule;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a>

---

##### `scheduleInfoInput`<sup>Optional</sup> <a name="scheduleInfoInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.scheduleInfoInput"></a>

```typescript
public readonly scheduleInfoInput: GoogleContactCenterInsightsAssessmentRuleScheduleInfo;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleContactCenterInsightsAssessmentRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `assessmentRuleId`<sup>Required</sup> <a name="assessmentRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.assessmentRuleId"></a>

```typescript
public readonly assessmentRuleId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsAssessmentRuleConfig <a name="GoogleContactCenterInsightsAssessmentRuleConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.Initializer"></a>

```typescript
import { googleContactCenterInsightsAssessmentRule } from '@cdktn/provider-google-beta'

const googleContactCenterInsightsAssessmentRuleConfig: googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.location">location</a></code> | <code>string</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.assessmentRuleId">assessmentRuleId</a></code> | <code>string</code> | A unique ID for the new AssessmentRule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.displayName">displayName</a></code> | <code>string</code> | Display Name of the assessment rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#id GoogleContactCenterInsightsAssessmentRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#project GoogleContactCenterInsightsAssessmentRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.sampleRule">sampleRule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a></code> | sample_rule block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.scheduleInfo">scheduleInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | schedule_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#location GoogleContactCenterInsightsAssessmentRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, apply this rule to conversations. Otherwise, this rule is inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#active GoogleContactCenterInsightsAssessmentRule#active}

---

##### `assessmentRuleId`<sup>Optional</sup> <a name="assessmentRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.assessmentRuleId"></a>

```typescript
public readonly assessmentRuleId: string;
```

- *Type:* string

A unique ID for the new AssessmentRule.

This ID will become the final
component of the AssessmentRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#assessment_rule_id GoogleContactCenterInsightsAssessmentRule#assessment_rule_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#deletion_policy GoogleContactCenterInsightsAssessmentRule#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display Name of the assessment rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#display_name GoogleContactCenterInsightsAssessmentRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#id GoogleContactCenterInsightsAssessmentRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#project GoogleContactCenterInsightsAssessmentRule#project}.

---

##### `sampleRule`<sup>Optional</sup> <a name="sampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.sampleRule"></a>

```typescript
public readonly sampleRule: GoogleContactCenterInsightsAssessmentRuleSampleRule;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a>

sample_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#sample_rule GoogleContactCenterInsightsAssessmentRule#sample_rule}

---

##### `scheduleInfo`<sup>Optional</sup> <a name="scheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.scheduleInfo"></a>

```typescript
public readonly scheduleInfo: GoogleContactCenterInsightsAssessmentRuleScheduleInfo;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a>

schedule_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#schedule_info GoogleContactCenterInsightsAssessmentRule#schedule_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContactCenterInsightsAssessmentRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#timeouts GoogleContactCenterInsightsAssessmentRule#timeouts}

---

### GoogleContactCenterInsightsAssessmentRuleSampleRule <a name="GoogleContactCenterInsightsAssessmentRuleSampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.Initializer"></a>

```typescript
import { googleContactCenterInsightsAssessmentRule } from '@cdktn/provider-google-beta'

const googleContactCenterInsightsAssessmentRuleSampleRule: googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.conversationFilter">conversationFilter</a></code> | <code>string</code> | To specify the filter for the conversions that should apply this sample rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.dimension">dimension</a></code> | <code>string</code> | Group by dimension to sample the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.samplePercentage">samplePercentage</a></code> | <code>number</code> | Percentage of conversations that we should sample  based on the dimension between [0, 100]. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.sampleRow">sampleRow</a></code> | <code>number</code> | Number of the conversations that we should sample based on the dimension. |

---

##### `conversationFilter`<sup>Optional</sup> <a name="conversationFilter" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.conversationFilter"></a>

```typescript
public readonly conversationFilter: string;
```

- *Type:* string

To specify the filter for the conversions that should apply this sample rule.

An empty filter means this sample rule applies to all conversations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#conversation_filter GoogleContactCenterInsightsAssessmentRule#conversation_filter}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.dimension"></a>

```typescript
public readonly dimension: string;
```

- *Type:* string

Group by dimension to sample the conversation.

If no dimension is
provided, the sampling will be applied to the project level.
Current supported dimensions is 'quality_metadata.agent_info.agent_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#dimension GoogleContactCenterInsightsAssessmentRule#dimension}

---

##### `samplePercentage`<sup>Optional</sup> <a name="samplePercentage" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.samplePercentage"></a>

```typescript
public readonly samplePercentage: number;
```

- *Type:* number

Percentage of conversations that we should sample  based on the dimension between [0, 100].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#sample_percentage GoogleContactCenterInsightsAssessmentRule#sample_percentage}

---

##### `sampleRow`<sup>Optional</sup> <a name="sampleRow" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.sampleRow"></a>

```typescript
public readonly sampleRow: number;
```

- *Type:* number

Number of the conversations that we should sample based on the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#sample_row GoogleContactCenterInsightsAssessmentRule#sample_row}

---

### GoogleContactCenterInsightsAssessmentRuleScheduleInfo <a name="GoogleContactCenterInsightsAssessmentRuleScheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.Initializer"></a>

```typescript
import { googleContactCenterInsightsAssessmentRule } from '@cdktn/provider-google-beta'

const googleContactCenterInsightsAssessmentRuleScheduleInfo: googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.endTime">endTime</a></code> | <code>string</code> | End time of the schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.schedule">schedule</a></code> | <code>string</code> | The groc expression. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.startTime">startTime</a></code> | <code>string</code> | Start time of the schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.timeZone">timeZone</a></code> | <code>string</code> | The timezone to use for the groc expression. If not specified, defaults to UTC. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

End time of the schedule.

If not specified, will keep scheduling new
pipelines for execution until the schedule is no longer active or deleted.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#end_time GoogleContactCenterInsightsAssessmentRule#end_time}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

The groc expression.

Format: 'every number [synchronized]'
Cron syntax is not supported.
Time units can be: minutes, hours
Synchronized is optional and indicates that the schedule should be
synchronized to the start of the interval: every 5 minutes synchronized
means 00:00, 00:05 ...
Otherwise the start time is random within the interval.
Example: 'every 5 minutes'
could be  00:02, 00:07, 00:12, ...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#schedule GoogleContactCenterInsightsAssessmentRule#schedule}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Start time of the schedule.

If not specified, will start as soon as the
schedule is created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#start_time GoogleContactCenterInsightsAssessmentRule#start_time}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The timezone to use for the groc expression. If not specified, defaults to UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#time_zone GoogleContactCenterInsightsAssessmentRule#time_zone}

---

### GoogleContactCenterInsightsAssessmentRuleTimeouts <a name="GoogleContactCenterInsightsAssessmentRuleTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.Initializer"></a>

```typescript
import { googleContactCenterInsightsAssessmentRule } from '@cdktn/provider-google-beta'

const googleContactCenterInsightsAssessmentRuleTimeouts: googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#create GoogleContactCenterInsightsAssessmentRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#delete GoogleContactCenterInsightsAssessmentRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#update GoogleContactCenterInsightsAssessmentRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#create GoogleContactCenterInsightsAssessmentRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#delete GoogleContactCenterInsightsAssessmentRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#update GoogleContactCenterInsightsAssessmentRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference <a name="GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer"></a>

```typescript
import { googleContactCenterInsightsAssessmentRule } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetConversationFilter">resetConversationFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSamplePercentage">resetSamplePercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSampleRow">resetSampleRow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConversationFilter` <a name="resetConversationFilter" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetConversationFilter"></a>

```typescript
public resetConversationFilter(): void
```

##### `resetDimension` <a name="resetDimension" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetSamplePercentage` <a name="resetSamplePercentage" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSamplePercentage"></a>

```typescript
public resetSamplePercentage(): void
```

##### `resetSampleRow` <a name="resetSampleRow" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSampleRow"></a>

```typescript
public resetSampleRow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilterInput">conversationFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimensionInput">dimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentageInput">samplePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRowInput">sampleRowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilter">conversationFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimension">dimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentage">samplePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRow">sampleRow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conversationFilterInput`<sup>Optional</sup> <a name="conversationFilterInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilterInput"></a>

```typescript
public readonly conversationFilterInput: string;
```

- *Type:* string

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: string;
```

- *Type:* string

---

##### `samplePercentageInput`<sup>Optional</sup> <a name="samplePercentageInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentageInput"></a>

```typescript
public readonly samplePercentageInput: number;
```

- *Type:* number

---

##### `sampleRowInput`<sup>Optional</sup> <a name="sampleRowInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRowInput"></a>

```typescript
public readonly sampleRowInput: number;
```

- *Type:* number

---

##### `conversationFilter`<sup>Required</sup> <a name="conversationFilter" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilter"></a>

```typescript
public readonly conversationFilter: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimension"></a>

```typescript
public readonly dimension: string;
```

- *Type:* string

---

##### `samplePercentage`<sup>Required</sup> <a name="samplePercentage" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentage"></a>

```typescript
public readonly samplePercentage: number;
```

- *Type:* number

---

##### `sampleRow`<sup>Required</sup> <a name="sampleRow" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRow"></a>

```typescript
public readonly sampleRow: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContactCenterInsightsAssessmentRuleSampleRule;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a>

---


### GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference <a name="GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer"></a>

```typescript
import { googleContactCenterInsightsAssessmentRule } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContactCenterInsightsAssessmentRuleScheduleInfo;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a>

---


### GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference <a name="GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleContactCenterInsightsAssessmentRule } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContactCenterInsightsAssessmentRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a>

---



